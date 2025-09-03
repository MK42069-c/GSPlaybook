import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Target, Users, BookOpen, BarChart3, Settings, Lightbulb, TrendingUp } from "lucide-react"

export default function StrategyPage() {
  const strategicGoals = [
    {
      title: "Skills-Gap Analysis",
      description: "Identifying current and future skills needed for MAF's success",
    },
    {
      title: "Culture & Learners Experience",
      description: "Building a thriving learning culture sustained by engaged employees",
    },
    {
      title: "Future-Ready Talents",
      description: "Developing capabilities for tomorrow's challenges",
    },
  ]

  const powerSkills = [
    "Emotional Intelligence",
    "Communication Skills",
    "Presentation Skills",
    "Teamwork and Collaboration",
    "Time Management",
    "Problem Solving",
  ]

  const mandatoryLearning = [
    { name: "Language Learning", timeline: "Q2-2025", audience: "All Employees" },
    { name: "First-Time Managers", timeline: "Q2-2025", audience: "New Managers" },
    { name: "LSS White & Yellow-Belts Certification", timeline: "Q2-2025", audience: "Operations Teams" },
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
              <Link href="/programs" className="text-gray-600 hover:text-blue-600 transition-colors">
                Programs
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
          <Badge className="mb-4 bg-blue-100 text-blue-800">Learning Strategy</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">L&D Strategic Framework</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Our cohesive L&D strategy ensures all parts of the learning ecosystem are aligned, focusing on skills-gap
            analysis and building a thriving learning culture.
          </p>
        </div>

        {/* Strategic Goals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Strategic Goals</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {strategicGoals.map((goal, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{goal.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{goal.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* L&D Ecosystem Pillars */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">L&D Ecosystem Building Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  <CardTitle>People</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Every person from the executive suite to junior employees plays a role in feeding the learning
                  ecosystem through contributing to workplace culture.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Executive leadership engagement</li>
                  <li>• Employee participation</li>
                  <li>• Cultural contribution</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-green-500" />
                  <CardTitle>Content</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  All shapes and forms of learning content, connecting learners with interventions they enjoy,
                  comprehend and eventually put into practice.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Instructor-led training</li>
                  <li>• LMS courses</li>
                  <li>• Just-in-time learning</li>
                  <li>• Reference guides</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Settings className="w-5 h-5 text-purple-500" />
                  <CardTitle>Technology</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our LMS and LXP platforms enabling individual learning paths, tracking journeys, and data-based
                  decision making.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Success Factors enhancement</li>
                  <li>• LXP integration</li>
                  <li>• Peer-to-peer learning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-orange-500" />
                  <CardTitle>Analytics</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Understanding what, how, when and where learners like to learn, focusing only on data that matters.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Learning preferences analysis</li>
                  <li>• Engagement metrics</li>
                  <li>• No data dumps approach</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-red-500" />
                  <CardTitle>Governance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Regulating efforts and offerings by linking everything to our vision, strategic priorities and
                  philosophy.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Stakeholder identification</li>
                  <li>• Communication strategy</li>
                  <li>• SLA management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-indigo-500">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Lightbulb className="w-5 h-5 text-indigo-500" />
                  <CardTitle>Culture</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Building a thriving learning culture sustained by employees who want to continue developing and
                  helping peers.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Continuous development mindset</li>
                  <li>• Peer support systems</li>
                  <li>• Learning how to learn</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Power Skills Essentials */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span>Power Skills Essentials</span>
                </CardTitle>
                <CardDescription>Core competencies launching Q2-2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {powerSkills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mandatory Learning Framework</CardTitle>
                <CardDescription>Essential programs for all employees</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mandatoryLearning.map((program, index) => (
                    <div key={index} className="border-l-2 border-gray-200 pl-4">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-gray-900">{program.name}</h4>
                        <Badge variant="outline">{program.timeline}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">{program.audience}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ADDIE Framework */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>ADDIE Framework - Our Standard Approach</CardTitle>
              <CardDescription>
                Systematic instructional design model ensuring effective, efficient, and appealing learning materials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold text-lg">A</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Analysis</h3>
                  <p className="text-sm text-gray-600">Learning needs assessment and audience profiling</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 font-bold text-lg">D</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Design</h3>
                  <p className="text-sm text-gray-600">Learning objectives and structure planning</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 font-bold text-lg">D</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Development</h3>
                  <p className="text-sm text-gray-600">Content creation with multimedia elements</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-orange-600 font-bold text-lg">I</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Implementation</h3>
                  <p className="text-sm text-gray-600">Delivery and accessibility management</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-red-600 font-bold text-lg">E</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Evaluation</h3>
                  <p className="text-sm text-gray-600">Effectiveness measurement and improvement</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button asChild>
            <Link href="/programs">
              View Training Programs
              <TrendingUp className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
