import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, BarChart3, Users, Target, Star, Activity, ExternalLink } from "lucide-react"

export default function AnalyticsPage() {
  const dashboards = [
    {
      name: "Learning Management Dashboard",
      description: "Comprehensive learning consumption data across all businesses",
      metrics: [
        "Attendees",
        "Unique Attendees",
        "Learning Hours",
        "Average Learning Hours per Employee",
        "Attendance/Completion Ratios",
        "Active Learners Ratio",
      ],
      status: "Live",
      icon: BarChart3,
      url: "https://app.powerbi.com/groups/me/reports/e60efe6f-3cc8-4185-b42c-eb507daf01fd/ReportSection85289e90b88d7c9e9ba1?ctid=b09ab65e-9063-4862-afa2-d75ab48bba74&experience=power-bi&clientSideAuth=0",
      color: "bg-[#B4975A]",
    },
    {
      name: "Mandatory Courses Dashboard",
      description: "Completion status of all MAF mandatory courses",
      metrics: ["Course Completion Status", "Compliance Tracking", "Business Unit Performance"],
      status: "Live",
      icon: Target,
      url: "https://app.powerbi.com/links/p1gnQ5wMm6?ctid=b09ab65e-9063-4862-afa2-d75ab48bba74&pbi_source=linkShare",
      color: "bg-[#8A1538]",
    },
    {
      name: "Feedback Survey Dashboard",
      description: "C-SAT performance of learning experiences",
      metrics: ["Participant Engagement", "Facilitator Performance", "Content Design Quality"],
      status: "Live",
      icon: Star,
      url: "https://app.powerbi.com/links/7Uzjwqzoxl?ctid=b09ab65e-9063-4862-afa2-d75ab48bba74&pbi_source=linkShare",
      color: "bg-[#F89715]",
    },
    {
      name: "Learning Pulse Dashboard",
      description: "Learning culture assessment across 4 key dimensions",
      metrics: ["Learning Opportunity", "Learning Capability", "Learning Environment", "Learning Impact"],
      status: "Live",
      icon: Activity,
      url: "https://app.powerbi.com/links/M9yZjt0zPQ?ctid=b09ab65e-9063-4862-afa2-d75ab48bba74&pbi_source=linkShare&bookmarkGuid=471abf81-4bbd-488f-9af3-64d1112e4b22",
      color: "bg-[#D64550]",
    },
  ]

  const kirkpatrickLevels = [
    {
      level: "1",
      name: "Reaction",
      description: "Participant satisfaction and feedback",
      benchmark: "80%",
      color: "bg-[#B4975A]",
    },
    {
      level: "2",
      name: "Learning",
      description: "Knowledge and skill acquisition",
      benchmark: "75%",
      color: "bg-[#8A1538]",
    },
    {
      level: "3",
      name: "Behavior",
      description: "Behavioral change in work environment",
      benchmark: "70%",
      color: "bg-[#F89715]",
    },
    {
      level: "4",
      name: "Results",
      description: "Organizational outcomes and business impact",
      benchmark: "65%",
      color: "bg-[#D64550]",
    },
  ]

  const learningPulseData = [
    {
      dimension: "Learning Opportunity",
      description: "Access to relevant learning choices",
      insights: "Strong access to learning resources across all business units",
    },
    {
      dimension: "Learning Capability",
      description: "Learning how to learn, not just what to learn",
      insights: "Opportunity to enhance self-directed learning skills",
    },
    {
      dimension: "Learning Environment",
      description: "Environment supports learning and development",
      insights: "Excellent supportive culture for continuous learning",
    },
    {
      dimension: "Learning Impact",
      description: "Performance improvement through learning",
      insights: "Good correlation between learning and performance outcomes",
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
          <Badge className="mb-4 bg-[#F89715] text-white">Analytics & Insights</Badge>
          <h1 className="text-4xl font-bold text-[#31251C] mb-4">Learning Analytics Dashboard</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Data-driven insights for informed decision making, focusing only on metrics that matter for continuous
            improvement and strategic alignment.
          </p>
        </div>

        <Tabs defaultValue="dashboards" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-[#E1D5BD]/50">
            <TabsTrigger value="dashboards" className="data-[state=active]:bg-[#B4975A] data-[state=active]:text-white">
              Dashboards
            </TabsTrigger>
            <TabsTrigger
              value="kirkpatrick"
              className="data-[state=active]:bg-[#B4975A] data-[state=active]:text-white"
            >
              Kirkpatrick Model
            </TabsTrigger>
            <TabsTrigger value="pulse" className="data-[state=active]:bg-[#B4975A] data-[state=active]:text-white">
              Learning Pulse
            </TabsTrigger>
            <TabsTrigger value="feedback" className="data-[state=active]:bg-[#B4975A] data-[state=active]:text-white">
              Feedback Analysis
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboards" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {dashboards.map((dashboard, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-[#D6D3D2]/50">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${dashboard.color} rounded-lg flex items-center justify-center`}>
                        <dashboard.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-[#31251C]">{dashboard.name}</CardTitle>
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-[#E1D5BD] text-[#31251C]">{dashboard.status}</Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription>{dashboard.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-[#31251C] mb-2">Key Metrics:</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {dashboard.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-[#B4975A] rounded-full"></div>
                              <span className="text-sm text-gray-600">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button asChild className={`w-full ${dashboard.color} hover:opacity-90 text-white`}>
                        <a href={dashboard.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Open Dashboard
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-[#B4975A]/20">
              <CardHeader>
                <CardTitle className="text-[#31251C]">On-Demand Analytics</CardTitle>
                <CardDescription>
                  Custom dashboard configuration and design services available through our core Services Catalog
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-[#E1D5BD]/30 rounded-lg">
                    <BarChart3 className="w-8 h-8 text-[#B4975A] mx-auto mb-2" />
                    <p className="text-sm font-medium text-[#31251C]">Custom Configuration</p>
                    <p className="text-xs text-gray-500 mt-1">Tailored to specific needs</p>
                  </div>
                  <div className="text-center p-4 bg-[#E1D5BD]/30 rounded-lg">
                    <Target className="w-8 h-8 text-[#8A1538] mx-auto mb-2" />
                    <p className="text-sm font-medium text-[#31251C]">Stakeholder Focused</p>
                    <p className="text-xs text-gray-500 mt-1">Aligned with business goals</p>
                  </div>
                  <div className="text-center p-4 bg-[#E1D5BD]/30 rounded-lg">
                    <Activity className="w-8 h-8 text-[#F89715] mx-auto mb-2" />
                    <p className="text-sm font-medium text-[#31251C]">Data-Driven Insights</p>
                    <p className="text-xs text-gray-500 mt-1">Actionable analytics</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="kirkpatrick" className="space-y-6">
            <Card className="border-[#B4975A]/20">
              <CardHeader>
                <CardTitle className="text-[#31251C]">The Kirkpatrick Model</CardTitle>
                <CardDescription>
                  Globally recognized method for evaluating training and learning program results across four levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {kirkpatrickLevels.map((level, index) => (
                    <div key={index} className="text-center">
                      <div
                        className={`w-16 h-16 ${level.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <span className="text-white font-bold text-xl">{level.level}</span>
                      </div>
                      <h3 className="font-semibold text-[#31251C] mb-2">{level.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{level.description}</p>
                      
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-[#B4975A]/20">
                <CardHeader>
                  <CardTitle className="text-[#31251C]">Level 1 & 2: Immediate Impact</CardTitle>
                  <CardDescription>Reaction and Learning assessment methods</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#B4975A] pl-4">
                      <h4 className="font-semibold text-[#31251C]">Reaction (Level 1)</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Feedback surveys measuring participant satisfaction, content relevance, and overall experience
                      </p>
                      <Badge className="bg-[#E1D5BD] text-[#31251C]">80% Benchmark</Badge>
                    </div>
                    <div className="border-l-4 border-[#8A1538] pl-4">
                      <h4 className="font-semibold text-[#31251C]">Learning (Level 2)</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Pre- and post-training assessments to measure knowledge and skill acquisition
                      </p>
                      <Badge className="bg-[#E1D5BD] text-[#31251C]">75% Benchmark</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#B4975A]/20">
                <CardHeader>
                  <CardTitle className="text-[#31251C]">Level 3 & 4: Long-term Impact</CardTitle>
                  <CardDescription>Behavior and Results evaluation framework</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#F89715] pl-4">
                      <h4 className="font-semibold text-[#31251C]">Behavior (Level 3)</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Observation of behavioral changes in work environment over time
                      </p>
                      <Badge className="bg-[#E1D5BD] text-[#31251C]">70% Benchmark</Badge>
                    </div>
                    <div className="border-l-4 border-[#D64550] pl-4">
                      <h4 className="font-semibold text-[#31251C]">Results (Level 4)</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Organizational outcomes and business impact measurement
                      </p>
                      <Badge className="bg-[#E1D5BD] text-[#31251C]">65% Benchmark</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="pulse" className="space-y-6">
            <Card className="border-[#B4975A]/20">
              <CardHeader>
                <CardTitle className="text-[#31251C]">Learning Pulse Survey 2024</CardTitle>
                <CardDescription>
                  Learning Culture Monitor Survey based on CBE's framework with our innovative 4th component: Learning
                  Impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {learningPulseData.map((dimension, index) => (
                    <div key={index} className="border rounded-lg p-4 border-[#D6D3D2]">
                      <h3 className="font-semibold text-[#31251C] mb-2">{dimension.dimension}</h3>
                      <p className="text-sm text-gray-600 mb-3">{dimension.description}</p>
                      <p className="text-xs text-gray-500">{dimension.insights}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button asChild className="bg-[#D64550] hover:bg-[#8A1538] text-white">
                    <a
                      href="https://app.powerbi.com/links/M9yZjt0zPQ?ctid=b09ab65e-9063-4862-afa2-d75ab48bba74&pbi_source=linkShare&bookmarkGuid=471abf81-4bbd-488f-9af3-64d1112e4b22"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Learning Pulse Dashboard
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-[#B4975A]/20">
                <CardHeader>
                  <CardTitle className="text-[#31251C]">Survey Configuration</CardTitle>
                  <CardDescription>Technical implementation and analysis tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#B4975A]/20 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-[#B4975A]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#31251C]">Qualtrics Platform</h4>
                        <p className="text-sm text-gray-600">Advanced survey configuration and distribution</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#F89715]/20 rounded-lg flex items-center justify-center">
                        <Activity className="w-4 h-4 text-[#F89715]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#31251C]">Power BI Dashboard</h4>
                        <p className="text-sm text-gray-600">Dedicated analytics and insights visualization</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#B4975A]/20">
                <CardHeader>
                  <CardTitle className="text-[#31251C]">Innovation: 4th Component</CardTitle>
                  <CardDescription>Our unique addition to the traditional 3-component CBE model</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-[#E1D5BD]/30 to-[#D6D3D2]/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#31251C] mb-2">Learning Impact</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      We are able to improve our performance and innovate through learning at the organization.
                    </p>
                    
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-6">
            <Card className="border-[#B4975A]/20">
              <CardHeader>
                <CardTitle className="text-[#31251C]">Feedback Survey Analysis</CardTitle>
                <CardDescription>
                  C-SAT performance focusing on three key areas of learning experience assessment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#B4975A]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-[#B4975A]" />
                    </div>
                    <h3 className="font-semibold text-[#31251C] mb-2">Participant Engagement</h3>
                    <p className="text-sm text-gray-600 mb-3">Learning methodology effectiveness</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#8A1538]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-[#8A1538]" />
                    </div>
                    <h3 className="font-semibold text-[#31251C] mb-2">Facilitator Performance</h3>
                    <p className="text-sm text-gray-600 mb-3">Methods and overall performance</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#F89715]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-[#F89715]" />
                    </div>
                    <h3 className="font-semibold text-[#31251C] mb-2">Content Design Quality</h3>
                    <p className="text-sm text-gray-600 mb-3">Relevance and added value</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Button asChild className="bg-[#F89715] hover:bg-[#D9B300] text-white">
                    <a
                      href="https://app.powerbi.com/links/7Uzjwqzoxl?ctid=b09ab65e-9063-4862-afa2-d75ab48bba74&pbi_source=linkShare"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Feedback Survey Dashboard
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-[#B4975A]/20">
                <CardHeader>
                  <CardTitle className="text-[#31251C]">Feedback Benchmarks</CardTitle>
                  <CardDescription>Quality standards and performance targets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-[#E1D5BD]/30 rounded-lg">
                      <span className="font-medium text-[#31251C]">Overall Experience</span>
                      <Badge className="bg-[#B4975A] text-white">80% Benchmark</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#E1D5BD]/30 rounded-lg">
                      <span className="font-medium text-[#31251C]">Content Quality</span>
                      <Badge className="bg-[#8A1538] text-white">80% Benchmark</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#E1D5BD]/30 rounded-lg">
                      <span className="font-medium text-[#31251C]">Logistics</span>
                      <Badge className="bg-[#F89715] text-white">80% Benchmark</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#E1D5BD]/30 rounded-lg">
                      <span className="font-medium text-[#31251C]">Facilitator Performance</span>
                      <Badge className="bg-[#D64550] text-white">80% Benchmark</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#B4975A]/20">
                <CardHeader>
                  <CardTitle className="text-[#31251C]">Continuous Improvement</CardTitle>
                  <CardDescription>Feedback-driven enhancement strategies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#B4975A] rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-[#31251C]">Regular Content Review</h4>
                        <p className="text-sm text-gray-600">Based on learner feedback and performance data</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#8A1538] rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-[#31251C]">Facilitator Development</h4>
                        <p className="text-sm text-gray-600">Ongoing training and performance coaching</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F89715] rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-[#31251C]">Content Enhancement</h4>
                        <p className="text-sm text-gray-600">Regular updates to maintain relevance and effectiveness</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            asChild
            variant="outline"
            className="border-[#B4975A] text-[#B4975A] hover:bg-[#B4975A] hover:text-white bg-transparent"
          >
            <Link href="/programs">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Programs
            </Link>
          </Button>
          <Button asChild className="bg-[#B4975A] hover:bg-[#8A1538] text-white">
            <Link href="/governance">
              View Governance Framework
              <Target className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
