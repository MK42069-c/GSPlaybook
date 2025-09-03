import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Users,
  BookOpen,
  Target,
  TrendingUp,
  ExternalLink,
  BarChart3,
  Lightbulb,
  CheckCircle,
  Star,
  Activity,
} from "lucide-react"

export default function CulturePage() {
  const frameworkComponents = [
    {
      title: "Learning Opportunity",
      description: "Access to relevant learning choices that align with individual and organizational needs",
      icon: BookOpen,
      color: "bg-[#B4975A]",
      details: [
        "Diverse learning modalities and formats",
        "Relevant content aligned with business needs",
        "Accessible learning resources across all levels",
        "Flexible learning pathways and schedules",
      ],
    },
    {
      title: "Learning Capability",
      description: "Developing the ability to learn how to learn, not just what to learn",
      icon: Lightbulb,
      color: "bg-[#8A1538]",
      details: [
        "Self-directed learning skills development",
        "Critical thinking and problem-solving abilities",
        "Continuous learning mindset cultivation",
        "Learning agility and adaptability",
      ],
    },
    {
      title: "Learning Environment",
      description: "Creating a supportive culture that encourages and facilitates continuous learning",
      icon: Users,
      color: "bg-[#F89715]",
      details: [
        "Psychological safety for learning and experimentation",
        "Leadership support and role modeling",
        "Collaborative learning communities",
        "Recognition and reward for learning efforts",
      ],
    },
    {
      title: "Learning Impact",
      description: "Measuring and demonstrating the effectiveness of learning on performance and business outcomes",
      icon: TrendingUp,
      color: "bg-[#2E7D32]",
      details: [
        "Performance improvement tracking",
        "Business outcome correlation",
        "ROI measurement and analysis",
        "Continuous improvement based on results",
      ],
      isNew: true,
    },
  ]

  const surveyBenefits = [
    {
      title: "Enhanced Learning Experience",
      description: "Your feedback helps us create more engaging and effective learning programs",
      icon: Star,
    },
    {
      title: "Personalized Development",
      description: "Insights enable us to tailor learning opportunities to individual needs",
      icon: Target,
    },
    {
      title: "Cultural Transformation",
      description: "Collective feedback drives positive changes in our learning culture",
      icon: Users,
    },
    {
      title: "Data-Driven Decisions",
      description: "Evidence-based improvements ensure resources are invested effectively",
      icon: BarChart3,
    },
  ]

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
          <Badge className="mb-4 bg-[#2E7D32] text-white">Learning Culture Survey</Badge>
          <h1 className="text-4xl font-bold text-[#31251C] mb-4">Building a Productive Learning Culture</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Help us create a more engaging, effective, and enjoyable learning environment by sharing your feedback
            through our comprehensive learning culture survey.
          </p>
        </div>

        {/* Survey Call-to-Action */}
        <Card className="mb-12 bg-gradient-to-r from-[#B4975A]/10 to-[#E1D5BD]/30 border-[#B4975A]/30">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-[#31251C] mb-4">Take the Learning Culture Survey</CardTitle>
            <CardDescription className="text-lg">
              Your voice matters! Participate in our survey to help shape the future of learning at MAF.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border">
                <Activity className="w-5 h-5 text-[#2E7D32]" />
                <span className="text-sm font-medium text-gray-700">Survey Duration: 10-15 minutes</span>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-[#B4975A] hover:bg-[#8A1538] text-white px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <a
                href="https://greatmoments.fra1.qualtrics.com/jfe/form/SV_6ljStGSuTbJe8TQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3"
              >
                <span>Start Survey</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
            <p className="text-sm text-gray-600 mt-4">
              Survey opens in a new window. Your responses are confidential and will be used to improve our learning
              programs.
            </p>
          </CardContent>
        </Card>

        <Tabs defaultValue="framework" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-[#E1D5BD]/50">
            <TabsTrigger value="framework" className="data-[state=active]:bg-[#B4975A] data-[state=active]:text-white">
              Framework Overview
            </TabsTrigger>
            <TabsTrigger value="components" className="data-[state=active]:bg-[#B4975A] data-[state=active]:text-white">
              Four Components
            </TabsTrigger>
            <TabsTrigger value="benefits" className="data-[state=active]:bg-[#B4975A] data-[state=active]:text-white">
              Survey Benefits
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-[#B4975A] data-[state=active]:text-white">
              Analytics & Insights
            </TabsTrigger>
          </TabsList>

          <TabsContent value="framework" className="space-y-6">
            <Card className="border-[#B4975A]/20">
              <CardHeader>
                <CardTitle className="text-2xl text-[#31251C]">CBE Framework Evolution</CardTitle>
                <CardDescription>
                  From the original 2015 three-component model to our enhanced 2024 four-component framework
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-[#31251C] mb-4">Original CBE Framework (2015)</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-[#B4975A] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <span className="font-medium text-gray-700">Learning Opportunity</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-[#8A1538] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">2</span>
                        </div>
                        <span className="font-medium text-gray-700">Learning Capability</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-[#F89715] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <span className="font-medium text-gray-700">Learning Environment</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#31251C] mb-4">Enhanced MAF Framework (2024)</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-[#B4975A] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <span className="font-medium text-gray-700">Learning Opportunity</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-[#8A1538] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">2</span>
                        </div>
                        <span className="font-medium text-gray-700">Learning Capability</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-[#F89715] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <span className="font-medium text-gray-700">Learning Environment</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-[#2E7D32]/10 rounded-lg border-2 border-[#2E7D32]/30">
                        <div className="w-8 h-8 bg-[#2E7D32] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">4</span>
                        </div>
                        <span className="font-medium text-[#2E7D32]">Learning Impact</span>
                        <Badge className="bg-[#2E7D32] text-white text-xs">NEW</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gradient-to-r from-[#E1D5BD]/30 to-[#D6D3D2]/30 rounded-lg">
                  <h4 className="font-semibold text-[#31251C] mb-3">Our Innovation: The Fourth Component</h4>
                  <p className="text-gray-700">
                    In 2024, MAF enhanced the traditional CBE framework by adding{" "}
                    <strong className="text-[#2E7D32]">Learning Impact</strong> as the fourth crucial component. This
                    addition reflects our commitment to measuring and demonstrating how learning translates into
                    tangible performance improvements and business outcomes, ensuring our L&D investments deliver real
                    value.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="components" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {frameworkComponents.map((component, index) => (
                <Card key={index} className="border-[#B4975A]/20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${component.color} rounded-lg flex items-center justify-center`}>
                        <component.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg flex items-center space-x-2">
                          <span>{component.title}</span>
                          {component.isNew && <Badge className="bg-[#2E7D32] text-white text-xs">NEW 2024</Badge>}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="mt-3">{component.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-[#31251C] mb-3">Key Focus Areas:</h4>
                    <ul className="space-y-2">
                      {component.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-[#2E7D32] mt-0.5" />
                          <span className="text-sm text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="benefits" className="space-y-6">
            <Card className="border-[#B4975A]/20">
              <CardHeader>
                <CardTitle className="text-2xl text-[#31251C]">Why Your Participation Matters</CardTitle>
                <CardDescription>
                  Your feedback drives meaningful improvements in our learning ecosystem
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {surveyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-[#E1D5BD]/20 rounded-lg">
                      <div className="w-10 h-10 bg-[#B4975A]/20 rounded-lg flex items-center justify-center">
                        <benefit.icon className="w-5 h-5 text-[#B4975A]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#31251C] mb-2">{benefit.title}</h3>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#B4975A]/20">
              <CardHeader>
                <CardTitle className="text-xl text-[#31251C]">Survey Confidentiality & Data Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#31251C] mb-3">Your Privacy is Protected</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#2E7D32] mt-0.5" />
                        <span>All responses are completely confidential</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#2E7D32] mt-0.5" />
                        <span>Individual responses are never shared</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#2E7D32] mt-0.5" />
                        <span>Data is aggregated for analysis only</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#2E7D32] mt-0.5" />
                        <span>Secure data handling and storage</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#31251C] mb-3">How We Use Your Feedback</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start space-x-2">
                        <Target className="w-4 h-4 text-[#B4975A] mt-0.5" />
                        <span>Identify areas for learning program improvement</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Target className="w-4 h-4 text-[#B4975A] mt-0.5" />
                        <span>Develop targeted learning interventions</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Target className="w-4 h-4 text-[#B4975A] mt-0.5" />
                        <span>Enhance learning culture initiatives</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Target className="w-4 h-4 text-[#B4975A] mt-0.5" />
                        <span>Measure progress and track improvements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="border-[#B4975A]/20">
              <CardHeader>
                <CardTitle className="text-2xl text-[#31251C]">Survey Configuration & Analytics</CardTitle>
                <CardDescription>
                  Advanced survey platform and dedicated analytics dashboard for comprehensive insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-[#31251C] mb-4">Qualtrics Platform</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-[#B4975A]/20 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-[#B4975A]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-[#31251C]">Advanced Survey Logic</h4>
                          <p className="text-sm text-gray-600">
                            Intelligent branching and skip logic for personalized survey experience
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-[#B4975A]/20 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-[#B4975A]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-[#31251C]">Multi-Device Compatibility</h4>
                          <p className="text-sm text-gray-600">Optimized for desktop, tablet, and mobile devices</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-[#B4975A]/20 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-[#B4975A]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-[#31251C]">Real-Time Data Collection</h4>
                          <p className="text-sm text-gray-600">Immediate data capture and validation</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-[#B4975A]/20 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-[#B4975A]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-[#31251C]">Automated Reminders</h4>
                          <p className="text-sm text-gray-600">Smart follow-up system to maximize participation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#31251C] mb-4">Power BI Analytics Dashboard</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-[#F89715]/20 rounded-lg flex items-center justify-center">
                          <BarChart3 className="w-4 h-4 text-[#F89715]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-[#31251C]">Interactive Visualizations</h4>
                          <p className="text-sm text-gray-600">
                            Dynamic charts and graphs for comprehensive data exploration
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-[#F89715]/20 rounded-lg flex items-center justify-center">
                          <BarChart3 className="w-4 h-4 text-[#F89715]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-[#31251C]">Four-Component Analysis</h4>
                          <p className="text-sm text-gray-600">Dedicated views for each learning culture component</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-[#F89715]/20 rounded-lg flex items-center justify-center">
                          <BarChart3 className="w-4 h-4 text-[#F89715]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-[#31251C]">Trend Analysis</h4>
                          <p className="text-sm text-gray-600">Historical data comparison and progress tracking</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-[#F89715]/20 rounded-lg flex items-center justify-center">
                          <BarChart3 className="w-4 h-4 text-[#F89715]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-[#31251C]">Actionable Insights</h4>
                          <p className="text-sm text-gray-600">Automated recommendations based on survey results</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#B4975A]/20">
              <CardHeader>
                <CardTitle className="text-xl text-[#31251C]">Dashboard Access</CardTitle>
                <CardDescription>View comprehensive analytics and insights from survey responses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="mb-6">
                    <div className="w-24 h-24 bg-[#F89715]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-12 h-12 text-[#F89715]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#31251C] mb-2">Learning Pulse Dashboard</h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Access real-time analytics and insights from the learning culture survey responses
                    </p>
                  </div>
                  <Button asChild className="bg-[#F89715] hover:bg-[#D9B300] text-white" disabled>
                    <span className="flex items-center space-x-2 cursor-not-allowed opacity-60">
                      <span>Dashboard Available After Survey Launch</span>
                      <BarChart3 className="w-4 h-4" />
                    </span>
                  </Button>
                  <p className="text-sm text-gray-500 mt-3">
                    The analytics dashboard will be available once survey responses are collected
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-to-r from-[#2E7D32]/10 to-[#B4975A]/10 border-[#2E7D32]/30">
          <CardContent className="text-center py-12">
            <h2 className="text-2xl font-bold text-[#31251C] mb-4">Ready to Shape Our Learning Culture?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Your participation in this survey is crucial for building a more effective and engaging learning
              environment. Every response helps us understand what works and what can be improved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-8 py-4">
                <a
                  href="https://greatmoments.fra1.qualtrics.com/jfe/form/SV_6ljStGSuTbJe8TQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>Take Survey Now</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#B4975A] text-[#B4975A] hover:bg-[#B4975A] hover:text-white bg-transparent px-8 py-4"
              >
                <Link href="/analytics">View Current Analytics</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            asChild
            variant="outline"
            className="border-[#B4975A] text-[#B4975A] hover:bg-[#B4975A] hover:text-white bg-transparent"
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button asChild className="bg-[#B4975A] hover:bg-[#8A1538] text-white">
            <Link href="/impact">
              View Learning Impact
              <TrendingUp className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
