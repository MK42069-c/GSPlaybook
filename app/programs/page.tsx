import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Clock,
  Users,
  Target,
  BookOpen,
  Monitor,
  Smartphone,
  Video,
  FileText,
  CheckCircle,
} from "lucide-react"

export default function ProgramsPage() {
  const contentModalities = [
    {
      type: "F2F Module",
      icon: Users,
      duration: "2 Hours - 3 Days",
      sla: "3-12 Weeks",
      tokens: "105-420",
      description: "Face-to-face instructor-led training sessions",
    },
    {
      type: "E-learning Modules",
      icon: Monitor,
      duration: "Variable",
      sla: "5-10 Weeks",
      tokens: "175-350",
      description: "Interactive digital learning experiences",
    },
    {
      type: "Screencasts",
      icon: Video,
      duration: "Variable length",
      sla: "No change",
      tokens: "21-35",
      description: "Desktop and mobile screen recordings",
    },
    {
      type: "2D Animation",
      icon: Smartphone,
      duration: "Variable length",
      sla: "No change",
      tokens: "21-42",
      description: "Animated learning content",
    },
  ]

  const organizationalStructure = [
    {
      division: "Global Solutions Learning Studio",
      lead: "Amira Issa",
      title: "Learning & Development Manager",
      focus: "Digital Learning Studio & Content Lab",
      team: [
        "Menna Tohamy - LNG Exp. Designer",
        "Abanoub Maged - LNG Exp. Designer",
        "Nagat El Mezariki - LNG Exp. Designer",
      ],
    },
    {
      division: "LLCoE - Leadership & Learning Center of Excellence",
      lead: "Jo Kearney",
      title: "VP – Group Head LLCoE",
      focus: "Leadership Development & Strategy",
      team: [
        "Tarek Wafi - Director Leadership Development",
        "Sarah Frandevi - Director Learning Transformation",
        "Ines Godinho - Director Leadership Strategy",
      ],
    },
  ]

  const businessUnits = [
    {
      name: "Properties",
      lead: "Maysa Mehtar - VP People & Organization",
      specialists: ["Mohamed Tharwat - L&D Business Partner", "Nizar Naccash - L&D Business Partner"],
    },
    {
      name: "Entertainment",
      lead: "Dana Nahas - VP People & Organization",
      specialists: ["Pauline Rizk - L&D Director", "Youssry Mansour - Senior Trainer"],
    },
    {
      name: "Retail",
      lead: "Samar Elmnhrawy - SVP People & Organization",
      specialists: ["Michael Barsoum - Director Retail L&D", "Yasmin Adel - L&D Manager"],
    },
  ]

  const corePrograms = [
    {
      title: "Rising Stars",
      description:
        "The Rising Stars program is a CX-Based Learning Journey designed to develop essential power skills. It aims to equip learners with the necessary competencies to excel in their roles and contribute effectively to the organization's success.",
      details: [
        "Emotional Intelligence",
        "Communication Skills",
        "Presentation Skills",
        "Teamwork and Collaboration",
        "Time Management",
        "Problem Solving",
      ],
      color: "bg-blue-100 text-blue-800",
    },
    {
      title: "Mandatory Learning Framework",
      description:
        "The Mandatory Learning Framework is set for Q2-2025. This framework outlines the essential learning programs that need to be completed by employees. It ensures that all team members are equipped with the necessary knowledge and skills to perform their duties effectively. The framework is designed to standardize learning across the organization and ensure compliance with internal and external requirements.",
      details: [],
      color: "bg-green-100 text-green-800",
    },
    {
      title: "Future-Ready Talents’ Catalogue",
      description:
        "The Future-Ready Talents’ Catalogue emphasizes language learning and certifications for first-time managers. This program aims to prepare employees for future challenges by providing them with key skills and certifications. It focuses on developing a pipeline of talent that is ready to take on leadership roles and drive the organization forward.",
      details: [
        "Language Learning",
        "First-Time Managers (Q2-2025)",
        "LSS White & Yellow-Belts Certification (Q2-2025)",
      ],
      color: "bg-purple-100 text-purple-800",
    },
    {
      title: "Content On-Demand",
      description:
        "The Content On-Demand resources include ILT (F2F/VILT) – Digital (E-Learning Modules, Screencasts, 2D Animations, Comic Strip, and more. These resources are designed to provide flexible and accessible learning options for employees. The digital modules offer interactive and engaging content that can be accessed at any time, while the animated modules provide visually appealing and easy-to-understand learning materials.",
      details: [],
      color: "bg-orange-100 text-orange-800",
    },
    {
      title: "Powerskills Essentials",
      description:
        " this program is a part of the broader Global Solutions initiative, which aims to enhance the learning and development ecosystem within the organization. It is designed to address the diverse learning needs of employees and ensure that they are equipped with the skills and knowledge required to succeed in their roles.",
      details: [],
      color: "bg-red-100 text-red-800",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
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
              <Link href="/strategy" className="text-gray-600 hover:text-blue-600 transition-colors">
                Strategy
              </Link>
              <Link href="/analytics" className="text-gray-600 hover:text-blue-600 transition-colors">
                Analytics
              </Link>
              <Link href="/governance" className="text-gray-600 hover:text-blue-600 transition-colors">
                Governance
              </Link>
              <Link href="/impact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Impact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <Badge className="mb-4 bg-green-100 text-green-800">Training Programs</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Programs & Content</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive training programs designed to develop future-ready talents through various learning modalities
            and content formats.
          </p>
        </div>

        <Tabs defaultValue="content" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="content"
              className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-200 hover:bg-gray-100"
            >
              Content Modalities
            </TabsTrigger>
            <TabsTrigger
              value="programs"
              className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-200 hover:bg-gray-100"
            >
              Core Programs
            </TabsTrigger>
            <TabsTrigger
              value="structure"
              className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-200 hover:bg-gray-100"
            >
              Organization
            </TabsTrigger>
            <TabsTrigger
              value="tokens"
              className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-200 hover:bg-gray-100"
            >
              Token System
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="content"
            className="space-y-6 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:duration-500"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contentModalities.map((modality, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <modality.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{modality.type}</CardTitle>
                        <CardDescription>{modality.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="flex items-center space-x-1 text-gray-500 mb-1">
                          <Clock className="w-3 h-3" />
                          <span>Duration</span>
                        </div>
                        <p className="font-medium">{modality.duration}</p>
                      </div>
                      <div>
                        <div className="flex items-center space-x-1 text-gray-500 mb-1">
                          <Target className="w-3 h-3" />
                          <span>SLA</span>
                        </div>
                        <p className="font-medium">{modality.sla}</p>
                      </div>
                      <div>
                        <div className="flex items-center space-x-1 text-gray-500 mb-1">
                          <FileText className="w-3 h-3" />
                          <span>Tokens</span>
                        </div>
                        <p className="font-medium">{modality.tokens}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Content Development Features</CardTitle>
                <CardDescription>Available formats and delivery methods</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Video className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Video Content</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Monitor className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Interactive Modules</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Smartphone className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Mobile Learning</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <BookOpen className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Reference Guides</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent
            value="programs"
            className="space-y-6 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {corePrograms.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge className={`mb-2 w-fit ${program.color}`}>Core Program</Badge>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  {program.details && program.details.length > 0 && (
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {program.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent
            value="structure"
            className="space-y-6 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:duration-500"
          >
            <div className="space-y-6">
              {organizationalStructure.map((division, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{division.division}</CardTitle>
                    <CardDescription>
                      Led by {division.lead}, {division.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <Badge className="bg-blue-100 text-blue-800">{division.focus}</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {division.team.map((member, memberIndex) => (
                        <div key={memberIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <span className="text-sm text-gray-700">{member}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Business Unit L&D Teams</CardTitle>
                <CardDescription>Specialized learning and development teams across business units</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {businessUnits.map((unit, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{unit.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{unit.lead}</p>
                      <div className="space-y-1">
                        {unit.specialists.map((specialist, specIndex) => (
                          <p key={specIndex} className="text-xs text-gray-500">
                            {specialist}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent
            value="tokens"
            className="space-y-6 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:duration-500"
          >
            <Card>
              <CardHeader>
                <CardTitle>Token-Based Resource Allocation</CardTitle>
                <CardDescription>
                  Fair distribution system for Learning Studio services across all business units
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Key Features</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                        <span>Tokens exclusive to Learning Studio services catalog</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                        <span>Exchangeable between Digital, Non-Digital, and facilitation requests</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                        <span>Workload management and fair resource distribution</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                        <span>SLA and Quality focused approach</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Benefits</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
                        <span>Encourages maximum use of available resources</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
                        <span>Maintains service level agreements</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
                        <span>Ensures quality delivery across all businesses</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
                        <span>Based on 2024 actual consumption data</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service Level Agreements</CardTitle>
                <CardDescription>Updated SLAs with token equivalents for different content types</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                      <tr className="border-b">
                        <th className="text-left py-2 px-4">Content Type</th>
                        <th className="text-left py-2 px-4">Old SLA</th>
                        <th className="text-left py-2 px-4">New SLA</th>
                        <th className="text-left py-2 px-4">Token Equivalent</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b">
                        <td className="py-2 px-4 font-medium">2 Hrs F2F Session</td>
                        <td className="py-2 px-4 text-gray-600">4 Weeks</td>
                        <td className="py-2 px-4 text-green-600">3 Weeks</td>
                        <td className="py-2 px-4">105</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 font-medium">1-Day Module</td>
                        <td className="py-2 px-4 text-gray-600">7 Weeks</td>
                        <td className="py-2 px-4 text-green-600">5 Weeks</td>
                        <td className="py-2 px-4">175</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 font-medium">E-learning Module</td>
                        <td className="py-2 px-4 text-gray-600">7-14 Weeks</td>
                        <td className="py-2 px-4 text-green-600">5-10 Weeks</td>
                        <td className="py-2 px-4">175-350</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 font-medium">Screencast</td>
                        <td className="py-2 px-4 text-gray-600">3-5 Days</td>
                        <td className="py-2 px-4 text-green-600">No change</td>
                        <td className="py-2 px-4">21-35</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> SLAs count for maximum 2 iterations per content modality. Better Learning
                    Needs Analysis and briefing will reduce aggregate SLA.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button asChild variant="outline">
            <Link href="/strategy">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Strategy
            </Link>
          </Button>
          <Button asChild>
            <Link href="/analytics">
              View Analytics Dashboard
              <Target className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
