import Link from "next/link";

export function MainLayoutFooter() {
  return (
    <footer className="bg-primary border-t border-border py-16 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">
              Sunflower School
            </h3>
            <p className="text-sm leading-relaxed">
              Excellence in education from kindergarten through high school.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#programs"
                  className="hover:text-foreground transition-colors"
                >
                  Kindergarten
                </Link>
              </li>
              <li>
                <Link
                  href="/#programs"
                  className="hover:text-foreground transition-colors"
                >
                  Elementary
                </Link>
              </li>
              <li>
                <Link
                  href="/#programs"
                  className="hover:text-foreground transition-colors"
                >
                  Middle School
                </Link>
              </li>
              <li>
                <Link
                  href="/#programs"
                  className="hover:text-foreground transition-colors"
                >
                  High School
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Admissions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/admissions"
                  className="hover:text-foreground transition-colors"
                >
                  Apply Now
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="hover:text-foreground transition-colors"
                >
                  Tuition & Aid
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-foreground transition-colors"
                >
                  Visit Campus
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="hover:text-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>123 Education Lane</li>
              <li>Springfield, ST 12345</li>
              <li className="pt-2">
                <Link
                  href="tel:555-123-4567"
                  className="hover:text-foreground transition-colors"
                >
                  (555) 123-4567
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@sunflowerschool.edu"
                  className="hover:text-foreground transition-colors"
                >
                  info@sunflowerschool.edu
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Sunflower School. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
