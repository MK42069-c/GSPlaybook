"use client"

import React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, CalendarIcon, ChevronLeft, ChevronRight, Clock, Users, Filter, Calendar } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Sample training events - you can replace this with your actual data
const trainingEvents = [
  // January 2025
  {
    id: 1,
    title: "Vision Board Workshop",
    date: "2025-01-23",
    startTime: "1:00 PM",
    endTime: "4:00 PM",
    type: "skills",
    audience: "Sr. Specialists & below",
    location: "Cairo",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "3 hours",
    category: "Power Skills",
  },
  {
    id: 2,
    title: "Vision Board Workshop",
    date: "2025-01-26",
    startTime: "1:00 PM",
    endTime: "4:00 PM",
    type: "skills",
    audience: "Sr. Specialists & below",
    location: "Cairo",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "3 hours",
    category: "Power Skills",
  },
  // February 2025
  {
    id: 3,
    title: "EQUIP-EQ",
    date: "2025-02-19",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "skills",
    audience: "Managers & above",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "7 hours",
    category: "Power Skills",
  },
  {
    id: 4,
    title: "Finance for non-Finance",
    date: "2025-02-19",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "mandatory",
    audience: "All",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "2 days",
    category: "Technical Skills",
  },
  {
    id: 5,
    title: "EQUIP-EQ",
    date: "2025-02-20",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "skills",
    audience: "Managers & above",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "7 hours",
    category: "Power Skills",
  },
  // May 2025
  {
    id: 6,
    title: "Teamwork & Collaboration",
    date: "2025-05-19",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "skills",
    audience: "Graduates Specialists/Ass",
    location: "Dubai",
    organization: "Majid Al Futtaim Holding",
    duration: "7 hours",
    category: "Power Skills",
  },
  {
    id: 7,
    title: "Presentation Skills",
    date: "2025-05-20",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "skills",
    audience: "Graduates Specialists/Ass",
    location: "Dubai",
    organization: "Majid Al Futtaim Holding",
    duration: "7 hours",
    category: "Power Skills",
  },
  {
    id: 8,
    title: "EQ",
    date: "2025-05-20",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "skills",
    audience: "Sp./Senior Sp",
    location: "Dubai",
    organization: "Majid Al Futtaim Customer Solutions",
    duration: "7 hours",
    category: "Power Skills",
  },
  {
    id: 9,
    title: "Finance for non-Finance",
    date: "2025-05-21",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "mandatory",
    audience: "All",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "2 days",
    category: "Technical Skills",
  },
  {
    id: 10,
    title: "Presentation Skills",
    date: "2025-05-22",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "skills",
    audience: "Sp./Senior Sp",
    location: "Dubai",
    organization: "Majid Al Futtaim Customer Solutions",
    duration: "7 hours",
    category: "Power Skills",
  },
  {
    id: 11,
    title: "Data Analytics",
    date: "2025-05-26",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "mandatory",
    audience: "Graduates",
    location: "Dubai",
    organization: "Majid Al Futtaim Retail",
    duration: "3 days",
    category: "Technical Skills",
  },
  // June 2025
  {
    id: 12,
    title: "Communication Skills",
    date: "2025-06-09",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "skills",
    audience: "Ass. Managers/Managers",
    location: "Cairo",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "7 hours",
    category: "Power Skills",
  },
  {
    id: 13,
    title: "Communication Skills",
    date: "2025-06-09",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "skills",
    audience: "Specialist/Sr Specialist",
    location: "Cairo",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "7 hours",
    category: "Power Skills",
  },
  {
    id: 14,
    title: "Business Writing & Email Etiquette",
    date: "2025-06-10",
    startTime: "9:30 AM",
    endTime: "1:30 PM",
    type: "skills",
    audience: "Specialist/Sr Specialist",
    location: "Cairo",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "4 hours",
    category: "Power Skills",
  },
  {
    id: 15,
    title: "MAFtech Orientation",
    date: "2025-06-10",
    startTime: "9:30 AM",
    endTime: "4:00 PM",
    type: "general",
    audience: "All Population",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "6.5 hours",
    category: "Orientation",
  },
  {
    id: 16,
    title: "Stakeholders Management",
    date: "2025-06-11",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "skills",
    audience: "Spec/Sr. Spec.",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "7 hours",
    category: "Power Skills",
  },
  {
    id: 17,
    title: "Stakeholders Management",
    date: "2025-06-11",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "skills",
    audience: "Ass.Mgrs/Mgrs",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "7 hours",
    category: "Power Skills",
  },
  // July 2025
  {
    id: 18,
    title: "MAFtech Orientation",
    date: "2025-07-16",
    startTime: "9:30 AM",
    endTime: "4:00 PM",
    type: "general",
    audience: "IT Category/Senior Mgrs",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "6.5 hours",
    category: "Orientation",
  },
  {
    id: 19,
    title: "MAFtech Orientation",
    date: "2025-07-17",
    startTime: "9:30 AM",
    endTime: "4:00 PM",
    type: "general",
    audience: "IT Category/Senior Mgrs",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "6.5 hours",
    category: "Orientation",
  },
  // September 2025
  {
    id: 20,
    title: "Decision Making",
    date: "2025-09-08",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "skills",
    audience: "Sr. Managers & above",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "7 hours",
    category: "Power Skills Essentials",
  },
  {
    id: 21,
    title: "Decision Making",
    date: "2025-09-09",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "skills",
    audience: "Managers",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "7 hours",
    category: "Power Skills Essentials",
  },
  {
    id: 22,
    title: "Critical Thinking",
    date: "2025-09-10",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "skills",
    audience: "Sr. Managers & above",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "7 hours",
    category: "Power Skills Essentials",
  },
  {
    id: 23,
    title: "Critical Thinking",
    date: "2025-09-11",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "skills",
    audience: "Managers",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "7 hours",
    category: "Power Skills Essentials",
  },
  {
    id: 24,
    title: "Teamwork",
    date: "2025-09-15",
    startTime: "9:30 AM",
    endTime: "1:30 PM",
    type: "skills",
    audience: "Sr. Managers & above",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "4 hours",
    category: "Power Skills Essentials",
  },
  {
    id: 25,
    title: "Teamwork",
    date: "2025-09-16",
    startTime: "9:30 AM",
    endTime: "1:30 PM",
    type: "skills",
    audience: "Managers",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "4 hours",
    category: "Power Skills Essentials",
  },
  {
    id: 26,
    title: "Stakeholder Management",
    date: "2025-09-17",
    startTime: "9:30 AM",
    endTime: "1:30 PM",
    type: "skills",
    audience: "Sr. Managers & above",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "4 hours",
    category: "Power Skills Essentials",
  },
  {
    id: 27,
    title: "Stakeholder Management",
    date: "2025-09-18",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "skills",
    audience: "Managers",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "7 hours",
    category: "Power Skills Essentials",
  },
  // October 2025
  {
    id: 28,
    title: "EQ",
    date: "2025-10-07",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "skills",
    audience: "Mgrs/Sr. Mgrs",
    location: "Cairo",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "7 hours",
    category: "Power Skills",
  },
  {
    id: 29,
    title: "EQ",
    date: "2025-10-07",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "skills",
    audience: "Ass.Mgrs & below",
    location: "Cairo",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "7 hours",
    category: "Power Skills",
  },
  {
    id: 30,
    title: "Managing Difficult Conversations",
    date: "2025-10-09",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "skills",
    audience: "Mgrs/Sr. Mgrs",
    location: "Cairo",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "7 hours",
    category: "Power Skills",
  },
  // November 2025
  {
    id: 31,
    title: "Negotiation Skills",
    date: "2025-11-10",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "mandatory",
    audience: "All",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "7 hours",
    category: "Functional Skills",
  },
  {
    id: 32,
    title: "Request for Proposal",
    date: "2025-11-11",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "mandatory",
    audience: "All",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "7 hours",
    category: "Functional Skills",
  },
  {
    id: 33,
    title: "Supply Management",
    date: "2025-11-12",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "mandatory",
    audience: "All",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "7 hours",
    category: "Functional Skills",
  },
  {
    id: 34,
    title: "Sustainability",
    date: "2025-11-13",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "mandatory",
    audience: "All",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "7 hours",
    category: "Functional Skills",
  },
  {
    id: 35,
    title: "Negotiation Skills",
    date: "2025-11-17",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "mandatory",
    audience: "All",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "7 hours",
    category: "Functional Skills",
  },
  {
    id: 36,
    title: "Request for Proposal",
    date: "2025-11-18",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "mandatory",
    audience: "All",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "2 days",
    category: "Functional Skills",
  },
  {
    id: 37,
    title: "Sustainability",
    date: "2025-11-20",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    type: "mandatory",
    audience: "All",
    location: "Dubai",
    organization: "Majid Al Futtaim Global Solutions",
    duration: "7 hours",
    category: "Functional Skills",
  },
]

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 1)) // January 2025
  const [selectedView, setSelectedView] = useState("month")

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([])
  const [filteredEvents, setFilteredEvents] = useState(trainingEvents)

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const companies = [
    "Holding",
    "Properties",
    "Lifestyle",
    "Retail",
    "Entertainment",
    "Global Solutions",
    "CS & MAFTech",
  ]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }

    return days
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const filterEvents = () => {
    let filtered = trainingEvents

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.audience.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by selected companies
    if (selectedCompanies.length > 0) {
      filtered = filtered.filter((event) => {
        const orgName = event.organization.toLowerCase()
        return selectedCompanies.some((company) => {
          const companyLower = company.toLowerCase()
          if (company === "CS & MAFTech") {
            return orgName.includes("customer solutions") || orgName.includes("maftech")
          }
          return orgName.includes(companyLower)
        })
      })
    }

    setFilteredEvents(filtered)
  }

  // Effect to filter events when search term or companies change
  React.useEffect(() => {
    filterEvents()
  }, [searchTerm, selectedCompanies, trainingEvents])

  const getEventsForDay = (day: number) => {
    if (!day) return []
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    return filteredEvents.filter((event) => event.date === dateStr)
  }

  const handleCompanyToggle = (company: string) => {
    setSelectedCompanies((prev) => (prev.includes(company) ? prev.filter((c) => c !== company) : [...prev, company]))
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCompanies([])
  }

  const days = getDaysInMonth(currentDate)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E1D5BD]/20 to-[#D6D3D2]/20">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button asChild variant="ghost" size="sm">
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/strategy" className="text-gray-600 hover:text-[#B4975A] transition-colors">
                Strategy
              </Link>
              <Link href="/programs" className="text-gray-600 hover:text-[#B4975A] transition-colors">
                Programs
              </Link>
              <Link href="/analytics" className="text-gray-600 hover:text-[#B4975A] transition-colors">
                Analytics
              </Link>
              <Link href="/governance" className="text-gray-600 hover:text-[#B4975A] transition-colors">
                Governance
              </Link>
              <Link href="/impact" className="text-gray-600 hover:text-[#B4975A] transition-colors">
                Impact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <Badge className="mb-4 bg-[#B4975A] text-white">Training Calendar</Badge>
          <h1 className="text-4xl font-bold text-[#31251C] mb-4">Learning & Development Calendar</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive schedule of all training programs, workshops, and learning events across MAF divisions.
          </p>
        </div>

        <Tabs defaultValue="calendar" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-[#E1D5BD]/50">
            <TabsTrigger value="calendar" className="data-[state=active]:bg-[#B4975A] data-[state=active]:text-white">
              Calendar View
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-[#B4975A] data-[state=active]:text-white">
              Upcoming Events
            </TabsTrigger>
            <TabsTrigger value="filters" className="data-[state=active]:bg-[#B4975A] data-[state=active]:text-white">
              Filters & Search
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calendar" className="space-y-6">
            {/* Calendar Controls */}
            <Card className="border-[#B4975A]/20 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-[#B4975A]/10 to-[#E1D5BD]/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigateMonth("prev")}
                      className="border-[#B4975A] text-[#B4975A] hover:bg-[#B4975A] hover:text-white"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <h2 className="text-2xl font-bold text-[#31251C]">
                      {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </h2>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigateMonth("next")}
                      className="border-[#B4975A] text-[#B4975A] hover:bg-[#B4975A] hover:text-white"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={selectedView === "month" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedView("month")}
                      className={
                        selectedView === "month"
                          ? "bg-[#B4975A] hover:bg-[#8A1538]"
                          : "border-[#B4975A] text-[#B4975A] hover:bg-[#B4975A] hover:text-white"
                      }
                    >
                      Month
                    </Button>
                    <Button
                      variant={selectedView === "week" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedView("week")}
                      className={
                        selectedView === "week"
                          ? "bg-[#B4975A] hover:bg-[#8A1538]"
                          : "border-[#B4975A] text-[#B4975A] hover:bg-[#B4975A] hover:text-white"
                      }
                    >
                      Week
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2">
                  {/* Day headers */}
                  {daysOfWeek.map((day) => (
                    <div key={day} className="p-3 text-center font-semibold text-[#31251C] bg-[#E1D5BD]/50 rounded-lg">
                      {day}
                    </div>
                  ))}

                  {/* Calendar days */}
                  {days.map((day, index) => {
                    const events = day ? getEventsForDay(day) : []
                    const isToday =
                      day &&
                      new Date().getDate() === day &&
                      new Date().getMonth() === currentDate.getMonth() &&
                      new Date().getFullYear() === currentDate.getFullYear()

                    return (
                      <div
                        key={index}
                        className={`min-h-[120px] p-3 border-2 rounded-lg transition-all hover:shadow-md ${
                          day
                            ? isToday
                              ? "bg-[#B4975A]/10 border-[#B4975A] shadow-md"
                              : "bg-white hover:bg-[#E1D5BD]/20 border-[#D6D3D2]"
                            : "bg-[#D6D3D2]/30 border-[#D6D3D2]"
                        }`}
                      >
                        {day && (
                          <>
                            <div className={`text-sm font-bold mb-2 ${isToday ? "text-[#B4975A]" : "text-[#31251C]"}`}>
                              {day}
                            </div>
                            <div className="space-y-1">
                              <TooltipProvider>
                                {events.slice(0, 3).map((event, eventIndex) => (
                                  <Tooltip key={eventIndex}>
                                    <TooltipTrigger asChild>
                                      <div
                                        className={`text-xs p-2 rounded-md truncate font-medium cursor-pointer ${
                                          event.type === "mandatory"
                                            ? "bg-[#8A1538] text-white"
                                            : event.type === "leadership"
                                              ? "bg-[#D64550] text-white"
                                              : event.type === "skills"
                                                ? "bg-[#F89715] text-white"
                                                : "bg-[#D9B300] text-white"
                                        }`}
                                      >
                                        {event.title}
                                      </div>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 max-w-xs">
                                      <h4 className="font-bold text-sm mb-1 text-[#31251C]">{event.title}</h4>
                                      <p className="text-xs text-gray-600 mb-2">{event.category}</p>
                                      <div className="space-y-1 text-xs text-gray-700">
                                        <p className="flex items-center">
                                          <Clock className="w-3 h-3 mr-1 text-gray-500" />
                                          {event.startTime} - {event.endTime} ({event.duration})
                                        </p>
                                        <p className="flex items-center">
                                          <Users className="w-3 h-3 mr-1 text-gray-500" />
                                          {event.audience}
                                        </p>
                                        <p className="flex items-center">
                                          <CalendarIcon className="w-3 h-3 mr-1 text-gray-500" />
                                          {event.location}
                                        </p>
                                        <p className="text-gray-500 mt-2">{event.organization}</p>
                                      </div>
                                    </TooltipContent>
                                  </Tooltip>
                                ))}
                              </TooltipProvider>
                              {events.length > 3 && (
                                <div className="text-xs text-[#31251C]/70 font-medium">+{events.length - 3} more</div>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Legend */}
            <Card className="border-[#B4975A]/20">
              <CardHeader>
                <CardTitle className="text-lg text-[#31251C]">Event Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#8A1538] rounded-md"></div>
                    <span className="text-sm font-medium text-[#31251C]">Mandatory Training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#D64550] rounded-md"></div>
                    <span className="text-sm font-medium text-[#31251C]">Leadership Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#F89715] rounded-md"></div>
                    <span className="text-sm font-medium text-[#31251C]">Skills Training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#D9B300] rounded-md"></div>
                    <span className="text-sm font-medium text-[#31251C]">General Training</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="space-y-4">
              {filteredEvents
                .filter((event) => new Date(event.date) >= new Date())
                .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                .slice(0, 10)
                .map((event) => (
                  <Card key={event.id} className="border-[#B4975A]/20">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-[#31251C]">{event.title}</CardTitle>
                        <Badge
                          className={
                            event.type === "mandatory"
                              ? "bg-[#8A1538] text-white"
                              : event.type === "leadership"
                                ? "bg-[#D64550] text-white"
                                : event.type === "skills"
                                  ? "bg-[#F89715] text-white"
                                  : "bg-[#D9B300] text-white"
                          }
                        >
                          {event.category}
                        </Badge>
                      </div>
                      <CardDescription>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-[#B4975A]" />
                          <span>
                            {event.startTime} - {event.endTime}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-[#8A1538]" />
                          <span>{event.audience}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-[#F89715] rounded-full"></div>
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-[#D64550] rounded-full"></div>
                          <span>{event.duration}</span>
                        </div>
                      </div>
                      <div className="mt-3 text-xs text-gray-500">{event.organization}</div>
                    </CardContent>
                  </Card>
                ))}
              {filteredEvents.filter((event) => new Date(event.date) >= new Date()).length === 0 && (
                <Card className="border-[#B4975A]/20">
                  <CardContent className="text-center py-12">
                    <div className="w-24 h-24 bg-[#E1D5BD]/50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CalendarIcon className="w-12 h-12 text-[#B4975A]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#31251C] mb-3">No Upcoming Events Found</h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      No training sessions match your current search and filter criteria.
                    </p>
                    <Button onClick={clearFilters} className="bg-[#B4975A] hover:bg-[#8A1538] text-white">
                      Clear Filters
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="filters" className="space-y-6">
            <Card className="border-[#B4975A]/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[#31251C]">
                  <Filter className="w-5 h-5 text-[#B4975A]" />
                  <span>Search & Filter Options</span>
                </CardTitle>
                <CardDescription>Find specific training sessions and filter by business units</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Search Bar */}
                <div className="mb-8">
                  <label htmlFor="search" className="block text-sm font-medium text-[#31251C] mb-2">
                    Search Training Sessions
                  </label>
                  <div className="relative">
                    <input
                      id="search"
                      type="text"
                      placeholder="Search by training name, category, or audience..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-3 border border-[#D6D3D2] rounded-lg focus:ring-2 focus:ring-[#B4975A] focus:border-[#B4975A] outline-none transition-colors"
                    />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm("")}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                  {searchTerm && (
                    <p className="mt-2 text-sm text-gray-600">
                      Found {filteredEvents.length} training session{filteredEvents.length !== 1 ? "s" : ""} matching "
                      {searchTerm}"
                    </p>
                  )}
                </div>

                {/* Company Filters */}
                <div className="mb-8">
                  <h4 className="font-semibold text-[#31251C] mb-4">Filter by Operating Company / Business Unit</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {companies.map((company) => (
                      <label
                        key={company}
                        className="flex items-center space-x-3 p-3 border border-[#D6D3D2] rounded-lg hover:bg-[#E1D5BD]/20 transition-colors cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCompanies.includes(company)}
                          onChange={() => handleCompanyToggle(company)}
                          className="rounded border-[#B4975A] text-[#B4975A] focus:ring-[#B4975A]"
                        />
                        <span className="text-sm text-gray-700 font-medium">{company}</span>
                      </label>
                    ))}
                  </div>
                  {selectedCompanies.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-600 mb-2">Active filters:</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedCompanies.map((company) => (
                          <Badge
                            key={company}
                            className="bg-[#B4975A] text-white cursor-pointer hover:bg-[#8A1538]"
                            onClick={() => handleCompanyToggle(company)}
                          >
                            {company} ✕
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Filter Actions */}
                <div className="pt-6 border-t border-[#D6D3D2]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button
                        onClick={clearFilters}
                        variant="outline"
                        className="border-[#B4975A] text-[#B4975A] hover:bg-[#B4975A] hover:text-white bg-transparent"
                      >
                        Clear All Filters
                      </Button>
                    </div>
                    <div className="text-sm text-gray-600">
                      Showing {filteredEvents.length} of {trainingEvents.length} training sessions
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Search Suggestions */}
            <Card className="border-[#B4975A]/20">
              <CardHeader>
                <CardTitle className="text-[#31251C]">Quick Search Suggestions</CardTitle>
                <CardDescription>Popular training categories and search terms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {[
                    "Power Skills",
                    "Leadership",
                    "Communication",
                    "EQ",
                    "Finance",
                    "Negotiation",
                    "Teamwork",
                    "Presentation",
                  ].map((suggestion) => (
                    <Button
                      key={suggestion}
                      variant="outline"
                      size="sm"
                      onClick={() => setSearchTerm(suggestion)}
                      className="border-[#D6D3D2] text-gray-700 hover:bg-[#E1D5BD]/30 hover:border-[#B4975A] transition-all bg-transparent"
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            asChild
            variant="outline"
            className="border-[#B4975A] text-[#B4975A] hover:bg-[#B4975A] hover:text-white bg-transparent"
          >
            <Link href="/impact">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Impact
            </Link>
          </Button>
          <Button asChild className="bg-[#B4975A] hover:bg-[#8A1538] text-white">
            <Link href="/">
              Return to Home
              <Calendar className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
