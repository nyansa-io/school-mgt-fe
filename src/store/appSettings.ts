import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppSettingsStore {
    noMaxWidthStatus: boolean
    className: string
}

interface AppSettingsActions {
    updatenoMaxWidthStatus: (status: boolean) => void
    updateClassName: (className: string) => void
}

export const useAppSettingsStore = create<AppSettingsStore & AppSettingsActions>()(
    persist((set) => ({
        noMaxWidthStatus: false,
        className: '',
        updatenoMaxWidthStatus(status) {
            set((state) => ({
                noMaxWidthStatus: status
            }))
        },
        updateClassName(className) {
            set((state) => ({
                className: className
            }))
        },
    }), {
        name: 'App Settings',
        partialize: (state) => ({
            // noMaxWidthStatus: state.noMaxWidthStatus
        }),
    })
)
