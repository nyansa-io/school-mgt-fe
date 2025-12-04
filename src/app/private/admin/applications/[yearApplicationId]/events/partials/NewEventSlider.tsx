import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  InputFormField,
  SelectFormField,
  SwitchFormField,
  TextAreaFormField,
} from "@/customComponents/FormFields";
import z from "zod";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import IconifyIcon from "@/customComponents/IconifyIcon";
import { cn } from "@/lib/utils";
import { useState } from "react";
import ButtonLoading from "@/customComponents/Button";
import InformationCard from "@/customComponents/InformationCard";

type TNewEventSliderProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const newEventSchema = z.object({
  isGraded: z.boolean(),
});

export default function NewEventSlider({
  open,
  onOpenChange,
}: TNewEventSliderProps) {
  const [currentView, setcurrentView] = useState<"form" | "grades">("grades");

  const form = useForm<z.infer<typeof newEventSchema>>({
    resolver: zodResolver(newEventSchema),
    mode: "onChange",
    defaultValues: {
      isGraded: false,
    },
  });

  const isGradable = form.watch("isGraded");

  const eventGradeSchema = z
    .object({
      subjects: z.array(
        z.object({
          subject: z.string().min(1, { message: "Subject name is required" }),
          overallScore: z
            .number()
            .min(1, { message: "Overall score is required" }),
          passMark: z.number().min(1, { message: "Pass mark is required" }),
          description: z.string().optional(),
        })
      ),
      class: z.string(),
    })
    .superRefine((data, ctx) => {
      if (isGradable) {
        if (!data.class || data.class.length < 1) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Class/Grade is required",
            path: ["class"],
          });
        }
        if (!data.subjects || data.subjects.length < 1) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "At least one subject is required",
            path: ["subjects"],
          });
        } else {
          data.subjects.forEach((subject, idx) => {
            if (!subject.subject || subject.subject.length < 1) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Subject name is required",
                path: ["subjects", idx, "subject"],
              });
            }
            if (!subject.overallScore || subject.overallScore < 1) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Overall score is required",
                path: ["subjects", idx, "overallScore"],
              });
            }
            if (!subject.passMark || subject.passMark < 1) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Pass mark is required",
                path: ["subjects", idx, "passMark"],
              });
            }
          });
        }
      }
    });

  const gradeForm = useForm<z.infer<typeof eventGradeSchema>>({
    resolver: zodResolver(eventGradeSchema),
    mode: "onChange",
    defaultValues: {
      subjects: [
        { subject: "", overallScore: 0, passMark: 0, description: "" },
      ],
    },
  });

  const {
    fields: subjectsFields,
    append: appendSubject,
    remove: removeSubject,
    // update: updateSubject,
  } = useFieldArray({
    control: gradeForm.control,
    name: "subjects",
  });

  return (
    <Sheet modal={true} open={open} onOpenChange={onOpenChange}>
      <SheetContent
        className={cn(
          "flex flex-col justify-between h-full min-w-screen md:min-w-sm transition-all",
          currentView == "grades" && "lg:min-w-[450px]"
        )}
      >
        <SheetHeader>
          <SheetTitle>New Event</SheetTitle>
          <SheetDescription>
            Add all the events that you expect to happen within this
          </SheetDescription>
        </SheetHeader>
        {currentView == "form" && (
          <Form {...form}>
            <form
              action=""
              className={cn(
                "flex flex-col flex-1 max-h-[80vh] overflow-y-auto"
              )}
            >
              {/* events form */}
              <div className="grid flex-1 auto-rows-min gap-4 px-4">
                <div className="isGraded bg-gray-50 p-2">
                  <p className="text-gray-500 text-sm">
                    Toggle the switch on or off if the participants of this
                    event will be graded or not.
                  </p>
                  {/* isActive */}
                  <SwitchFormField form={form} name="isGraded" label="" />
                </div>

                {/* Inoculation or Weighing Form */}
                <div className="imageSelection">
                  <label
                    htmlFor="productImages"
                    className=" flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive"
                  >
                    Event Banner <span className="text-red-500">*</span>
                  </label>
                  <div className="selectionContainer bg-[#F7F9FF] h-[100px] border border-dashed mt-2 rounded flex flex-col items-center justify-center gap-2">
                    {/* image icon */}
                    <IconifyIcon
                      icon="mage:image-upload"
                      fontSize={40}
                      className="text-lg text-blue-600"
                    />
                    <div className="textSection text-center">
                      <p className="text-sm">
                        {" "}
                        <label
                          className="text-blue-600"
                          htmlFor="productImages"
                        >
                          Click here
                        </label>{" "}
                        to upload or drag and drop
                      </p>
                      <p className="text-xs">Maximum file size 2MB</p>
                      <input
                        type="file"
                        className="hidden"
                        id="productImages"
                      />
                    </div>
                  </div>
                </div>
                {/* event name */}
                <InputFormField
                  form={form}
                  name="eventName"
                  label="Event Name"
                  placeholder="Enter event name..."
                />
                {/* description */}
                <TextAreaFormField
                  form={form}
                  name="type"
                  label="Event Description"
                  placeholder="Enter event Description..."
                />
                {/* event Date and time */}
                <div className="eventDateNTimes grid grid-cols-2 space-y-2 gap-x-4">
                  <div className="eventDate col-span-2">
                    <InputFormField
                      form={form}
                      name="eventDate"
                      label="Event Date"
                    />
                  </div>
                  <InputFormField
                    form={form}
                    name={"startTime"}
                    label="Start Time"
                    type="time"
                  />
                  <InputFormField
                    form={form}
                    name={"endTime"}
                    label="End Time"
                    type="time"
                  />
                </div>
                {/* event type */}
                <SelectFormField
                  form={form}
                  name="eventType"
                  label="Event type"
                  placeholder=""
                  options={[
                    { label: "In Person", value: "In Person" },
                    { label: "Online", value: "Online" },
                    { label: "Hybrid", value: "Hybrid" },
                  ]}
                />
                {/* Event Address */}
                <InputFormField
                  form={form}
                  name="address"
                  label="Event Address"
                  placeholder="Enter event address..."
                />
                {/* event url */}
                <InputFormField
                  form={form}
                  name="eventURl"
                  label="Online URL"
                  type="text"
                  placeholder="Enter Meeting url..."
                />
                {/* amount */}
                <InputFormField
                  form={form}
                  name="amount"
                  label="Amount"
                  placeholder="Enter amount..."
                  type="number"
                />

                <div className="isActive flex justify-end">
                  {/* isActive */}
                  <SwitchFormField
                    form={form}
                    name="isPaid"
                    label="Paid Event"
                    className=""
                  />
                </div>
              </div>
            </form>
          </Form>
        )}

        {currentView == "grades" && (
          <Form {...gradeForm}>
            <form
              action=""
              className="flex flex-col flex-1 max-h-[80vh] overflow-y-auto"
            >
              {/* grading setup */}
              <div className="gradingSetup grid auto-rows-min gap-4 px-4">
                <SelectFormField
                  form={gradeForm}
                  label="Class/Grade"
                  options={[]}
                  name="class"
                />
              </div>

              <div className="infoCard mt-4 px-4">
                <InformationCard
                  description={
                    "Give subjects and what should be their overall scores and the expected pass marks"
                  }
                  title="Grading setup"
                  styling={{ mainContainer: "bg-blue-50" }}
                />
              </div>

              {/* subject */}
              <div className="subjects space-y-4 px-4 mt-8">
                {subjectsFields.map((field, index) => (
                  <div
                    key={field.id}
                    className="subject space-y-2 bg-gray-50 p-4 relative"
                  >
                    <InputFormField
                      form={gradeForm}
                      label="Subject"
                      name={`subjects.${index}.subject`}
                      placeholder="Enter subject name..."
                    />
                    <div className="overAllScoreNPassMark grid grid-cols-2 gap-4">
                      <InputFormField
                        form={gradeForm}
                        label="Overall Score"
                        name={`subjects.${index}.overallScore`}
                        placeholder="Enter overall score..."
                        type="number"
                      />
                      <InputFormField
                        form={gradeForm}
                        label="Pass Mark"
                        name={`subjects.${index}.passMark`}
                        placeholder="Enter pass mark..."
                        type="number"
                      />
                    </div>
                    <TextAreaFormField
                      form={gradeForm}
                      label="Description"
                      name={`subjects.${index}.description`}
                      placeholder="Enter description..."
                    />

                    {/* remove subject */}
                    {index !== 0 && (
                      <div className="removeSubject absolute -bottom-2 right-0">
                        <div
                          onClick={() => removeSubject(index)}
                          className="removeVariantBtn w-fit flex items-center gap-2 cursor-pointer"
                        >
                          {/* icon */}
                          <IconifyIcon
                            icon="fluent:delete-28-regular"
                            className="text-red-500 text- !size-7"
                          />
                          {/* <p className='text-sm'>Remove Subject</p> */}
                        </div>
                      </div>
                    )}
                    <div className="number absolute top-1 right-1 bg-primary/ border-primary border-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold text-primary">
                      {index + 1}
                    </div>
                  </div>
                ))}

                {/* add another subject */}
                <div className="addAnotherSubject flex justify-end">
                  <div
                    className="addVariantBtn w-fit items-center gap-2 cursor-pointer"
                    onClick={() =>
                      appendSubject({
                        subject: "",
                        overallScore: 0,
                        passMark: 0,
                        description: "",
                      })
                    }
                  >
                    {/* icon */}
                    <IconifyIcon
                      icon="lucide:plus"
                      className="bg-primary text-white !size-7"
                    />
                    {/* <p className='text-sm'>Add another Subject</p> */}
                  </div>
                </div>
              </div>
            </form>
          </Form>
        )}
        <SheetFooter>
          {currentView == "form" && isGradable && (
            <ButtonLoading
              type="button"
              title="Next"
              onClick={() => {
                setcurrentView("grades");
              }}
            />
          )}
          {currentView == "grades" && (
            <ButtonLoading
              type="button"
              title="Previous"
              outline
              onClick={() => {
                setcurrentView("form");
              }}
            />
          )}
          {(!isGradable || currentView == "grades") && (
            <ButtonLoading type="submit" title="Create Event" />
          )}
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
