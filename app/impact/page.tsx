import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Target, TrendingUp, BarChart3, Award, CheckCircle, Star } from "lucide-react"

export default function ImpactPage() {
  const kirkpatrickLevels = [
    {
      level: "1",
      name: "Reaction",
      description: "Participant satisfaction and engagement with the learning experience",
      color: "bg-[#B4975A]",
      details: [
        "Post-training satisfaction surveys",
        "Content relevance assessment",
        "Delivery method effectiveness",
        "Overall learning experience rating",
      ],
      metrics: "Measured immediately after training completion",
    },
    {
      level: "2",
      name: "Learning",
      description: "Knowledge acquisition and skill development achieved",
      color: "bg-[#8A1538]",
      details: [
        "Pre and post-training assessments",
        "Knowledge retention tests",
        "Skill demonstration exercises",
        "Competency evaluations",
      ],
      metrics: "Assessed during and immediately after training",
    },
    {
      level: "3",
      name: "Behavior",
      description: "Application of learning in the workplace environment",
      color: "bg-[#F89715]",
      details: [
        "On-the-job performance observation",
        "Behavioral change assessment",
        "Skill application tracking",
        "Manager feedback collection",
      ],
      metrics: "Evaluated 3-6 months post-training",
    },
    {
      level: "4",
      name: "Results",
      description: "Business impact and organizational outcomes achieved",
      color: "bg-[#D64550]",
      details: ["Business KPI improvements", "ROI calculations", "Productivity measurements", "Quality enhancements"],
      metrics: "Measured 6-12 months post-training",
    },
  ]

  const implementationApproach = [
    {
      phase: "Design Phase",
      description: "Kirkpatrick evaluation built into program design",
      icon: Target,
      color: "text-[#B4975A]",
    },
    {
      phase: "Data Collection",
      description: "Systematic gathering of evidence at each level",
      icon: BarChart3,
      color: "text-[#8A1538]",
    },
    {
      phase: "Analysis & Reporting",
      description: "Comprehensive evaluation and insights generation",
      icon: TrendingUp,
      color: "text-[#F89715]",
    },
    {
      phase: "Continuous Improvement",
      description: "Program enhancement based on evaluation results",
      icon: Award,
      color: "text-[#D64550]",
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
              <Link href="/calendar" className="text-gray-600 hover:text-[#B4975A] transition-colors">
                Calendar
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <Badge className="mb-4 bg-[#E1D5BD] text-[#31251C]">Learning Impact Measurement</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">The Kirkpatrick Model</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Our comprehensive approach to measuring learning effectiveness and business impact using the globally
            recognized Kirkpatrick Four-Level Training Evaluation Model.
          </p>
        </div>

        {/* Kirkpatrick Overview */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-[#E1D5BD] to-[#D6D3D2] border-none">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-[#31251C]">Four Levels of Evaluation</CardTitle>
              <CardDescription className="text-center text-[#31251C]/80">
                Systematic measurement from immediate reactions to long-term business results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {kirkpatrickLevels.map((level, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`w-20 h-20 ${level.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <span className="text-white font-bold text-2xl">{level.level}</span>
                    </div>
                    <h3 className="font-semibold text-[#31251C] mb-2 text-lg">{level.name}</h3>
                    <p className="text-sm text-[#31251C]/70">{level.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Detailed Level Breakdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Evaluation Framework</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {kirkpatrickLevels.map((level, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${level.color} rounded-lg flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">L{level.level}</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl">{level.name}</CardTitle>
                      <CardDescription>{level.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Evaluation Methods</h4>
                      <ul className="space-y-1">
                        {level.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-[#B4975A] mt-0.5" />
                            <span className="text-sm text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Timing:</strong> {level.metrics}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Implementation Approach */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Our Implementation Approach</CardTitle>
              <CardDescription>
                How we integrate Kirkpatrick evaluation throughout the learning lifecycle
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {implementationApproach.map((phase, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <phase.icon className={`w-8 h-8 ${phase.color}`} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{phase.phase}</h3>
                    <p className="text-sm text-gray-600">{phase.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Benefits and Value */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-[#D9B300]" />
                  <span>Key Benefits</span>
                </CardTitle>
                <CardDescription>Why we use the Kirkpatrick Model</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#B4975A] rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">Comprehensive Measurement</h4>
                      <p className="text-sm text-gray-600">
                        Evaluates all aspects from satisfaction to business impact
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#8A1538] rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">Evidence-Based Decisions</h4>
                      <p className="text-sm text-gray-600">Data-driven insights for program improvements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#F89715] rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">ROI Demonstration</h4>
                      <p className="text-sm text-gray-600">Clear linkage between learning and business outcomes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#D64550] rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">Continuous Improvement</h4>
                      <p className="text-sm text-gray-600">Systematic enhancement of learning programs</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-[#D9B300]" />
                  <span>Success Metrics</span>
                </CardTitle>
                <CardDescription>Our evaluation benchmarks and targets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-[#E1D5BD]/30 rounded-lg">
                    <span className="font-medium text-gray-900">Level 1 - Reaction</span>
                    <Badge className="bg-[#B4975A] text-white">High Achievement</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#E1D5BD]/30 rounded-lg">
                    <span className="font-medium text-gray-900">Level 2 - Learning</span>
                    <Badge className="bg-[#8A1538] text-white">Strong Performance</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#E1D5BD]/30 rounded-lg">
                    <span className="font-medium text-gray-900">Level 3 - Behavior</span>
                    <Badge className="bg-[#F89715] text-white">Positive Impact</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#E1D5BD]/30 rounded-lg">
                    <span className="font-medium text-gray-900">Level 4 - Results</span>
                    <Badge className="bg-[#D64550] text-white">Demonstrated Value</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button asChild variant="outline">
            <Link href="/governance">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Governance
            </Link>
          </Button>
          <Button asChild className="bg-[#B4975A] hover:bg-[#8A1538] text-white">
            <Link href="/calendar">
              View Training Calendar
              <Target className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
