'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type AppProviderProps = {
  children: React.ReactNode
}

type AppContext = {
  step: number
  setStep: React.Dispatch<React.SetStateAction<number>>
  partySize: number
  pickPartySize: (size: number) => void
  date: Date | undefined
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
  pickDate: (date: Date) => void
  service: string
  setService: React.Dispatch<React.SetStateAction<string>>
  pickService: (service: string) => void
  time: string
  setTime: React.Dispatch<React.SetStateAction<string>>
  pickTime: (time: string) => void
}

const AppContext = createContext({} as AppContext)

export function useApp (): any {
  return useContext(AppContext)
}

export function AppProvider ({ children }: AppProviderProps): JSX.Element {

  const [step, setStep] = useState(0);
  const [partySize, setPartySize] = useState(0);
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [service, setService] = useState('')
  const [time, setTime] = useState('')

  useEffect(() => {console.log(time)}, [time])

  function pickPartySize(size: number) {
    setPartySize(size)
    setStep(2)
  }

  function pickDate(date: Date) {
    setDate(date)
    setStep(3)
  }

  function pickService(service: string) {
    setService(service)
    setStep(4)
  }

  function pickTime(time: string) {
    setTime(time)
    setStep(5)
  }
  
  return (
    <AppContext.Provider value={{ setStep, step, pickPartySize, partySize, date, setDate, pickDate, setService, service, pickService, setTime, time, pickTime  }}>
      {children}
    </AppContext.Provider>
  )
}