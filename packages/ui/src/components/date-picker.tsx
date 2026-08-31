"use client"

import * as React from "react"
import { format } from "date-fns"

import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import { Calendar } from "@workspace/ui/components/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { HugeiconsIcon } from "@hugeicons/react"
import { Calendar03Icon } from "@hugeicons/core-free-icons"

interface DatePickerProps {
  date?: Date
  onDateChange?: (date: Date | undefined) => void
  placeholder?: string
  className?: string
  disabled?: boolean
}

function DatePicker({
  date,
  onDateChange,
  placeholder = "Pick a date",
  className,
  disabled,
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground", className)}
            disabled={disabled}
          >
            <HugeiconsIcon icon={Calendar03Icon} data-icon="inline-start" />
            {date ? format(date, "PPP") : placeholder}
          </Button>
        }
      />
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onDateChange}
          autoFocus
        />
      </PopoverContent>
    </Popover>
  )
}

interface DateRangePickerProps {
  startDate?: Date
  endDate?: Date
  onRangeChange?: (range: { start: Date | undefined; end: Date | undefined }) => void
  placeholder?: string
  className?: string
  disabled?: boolean
}

function DateRangePicker({
  startDate,
  endDate,
  onRangeChange,
  placeholder = "Pick a date range",
  className,
  disabled,
}: DateRangePickerProps) {
  const [internalStart, setInternalStart] = React.useState<Date | undefined>(startDate)
  const [internalEnd, setInternalEnd] = React.useState<Date | undefined>(endDate)

  React.useEffect(() => {
    setInternalStart(startDate)
    setInternalEnd(endDate)
  }, [startDate, endDate])

  const handleSelect = (range: { from: Date | undefined; to: Date | undefined } | undefined) => {
    const start = range?.from
    const end = range?.to
    setInternalStart(start)
    setInternalEnd(end)
    onRangeChange?.({ start, end })
  }

  const displayText = internalStart && internalEnd
    ? `${format(internalStart, "LLL dd, y")} - ${format(internalEnd, "LLL dd, y")}`
    : internalStart
      ? format(internalStart, "LLL dd, y")
      : placeholder

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            className={cn("w-full justify-start text-left font-normal", !internalStart && "text-muted-foreground", className)}
            disabled={disabled}
          >
            <HugeiconsIcon icon={Calendar03Icon} data-icon="inline-start" />
            {displayText}
          </Button>
        }
      />
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={{
            from: internalStart,
            to: internalEnd,
          }}
          onSelect={handleSelect as any}
          numberOfMonths={2}
          autoFocus
        />
      </PopoverContent>
    </Popover>
  )
}

interface DatePickerWithPresetsProps {
  date?: Date
  onDateChange?: (date: Date | undefined) => void
  className?: string
  disabled?: boolean
}

function DatePickerWithPresets({
  date,
  onDateChange,
  className,
  disabled,
}: DatePickerWithPresetsProps) {
  const presets = [
    { label: "Today", date: new Date() },
    { label: "Tomorrow", date: new Date(new Date().setDate(new Date().getDate() + 1)) },
    { label: "In 3 days", date: new Date(new Date().setDate(new Date().getDate() + 3)) },
    { label: "In a week", date: new Date(new Date().setDate(new Date().getDate() + 7)) },
  ]

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground", className)}
            disabled={disabled}
          >
            <HugeiconsIcon icon={Calendar03Icon} data-icon="inline-start" />
            {date ? format(date, "PPP") : "Pick a date"}
          </Button>
        }
      />
      <PopoverContent className="flex w-auto flex-col gap-2 p-2" align="start">
        <div className="flex flex-col gap-1">
          {presets.map((preset) => (
            <Button
              key={preset.label}
              variant="ghost"
              size="sm"
              className="justify-start"
              onClick={() => onDateChange?.(preset.date)}
            >
              {preset.label}
            </Button>
          ))}
        </div>
        <div className="border-t pt-2">
          <Calendar
            mode="single"
            selected={date}
            onSelect={onDateChange}
            autoFocus
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}

export { DatePicker, DateRangePicker, DatePickerWithPresets }
