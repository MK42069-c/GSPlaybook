import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Shield,
  Users,
  FileText,
  Settings,
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3,
  TrendingUp,
} from "lucide-react"

export default function GovernancePage() {
  const contentRoles = [
    {
      role: "Content Creators",
      responsibilities: [
        "Create initial draft of training content",
        "Write text and create visual elements",
        "Integrate interactive components",
        "Ensure alignment with learning objectives",
        "Adhere to content creation standards",
      ],
      icon: FileText,
    },
    {
      role: "Learning & Development Team",
      responsibilities: [
        "Review content for educational effectiveness",
        "Check alignment with learning objectives",
        "Ensure adherence to content standards",
        "Provide feedback to content creators",
        "Approve content for next review stage",
      ],
      icon: Users,
    },
    {
      role: "Subject Matter Experts",
      responsibilities: [
        "Review content for technical accuracy",
        "Verify content is up-to-date",
        "Provide expert feedback",
        "Validate industry relevance",
      ],
      icon: Shield,
    },
    {
      role: "Legal/Compliance Team",
      responsibilities: [
        "Review for potential legal issues",
        "Ensure compliance with regulations",
        "Check industry standards adherence",
        "Provide compliance feedback",
      ],
      icon: AlertCircle,
    },
  ]

  const lmsRoles = [
    {
      admin: "Gold Admin (Global Solutions)",
      responsibilities: [
        "User Registration and Management",
        "Course Creation and Management",
        "Data Privacy and Security",
        "System Administration",
        "Extract comprehensive reports",
        "Knowledge transfer to new admins",
      ],
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      admin: "Silver Admin (Business Units)",
      responsibilities: [
        "Local user registration and management",
        "Content review and testing",
        "Share attendance reports",
        "Local user support",
        "Business-specific administration",
      ],
      color: "bg-gray-100 text-gray-800",
    },
  ]

  const addiePhases = [
    {
      phase: "Analysis",
      duration: "6 months validity",
      requirements: [
        "Thorough learning needs analysis",
        "Target audience profiling",
        "Business needs assessment",
        "Minimum 2 data sources required",
        "Learning consultation sessions",
      ],
      deliverables: ["Learning Needs Analysis Template"],
    },
    {
      phase: "Design",
      duration: "Variable",
      requirements: [
        "Learning objectives definition",
        "Content structure planning",
        "Methodology selection",
        "Assessment strategy design",
      ],
      deliverables: ["Learning Design Document"],
    },
    {
      phase: "Development",
      duration: "1-2 weeks to several months",
      requirements: [
        "Clear, professional language",
        "Consistent formatting",
        "Cultural sensitivity",
        "Brand guideline compliance",
        "Multimedia integration",
      ],
      deliverables: ["Participant Guide", "Facilitator Guide", "Presentation Deck", "Activities Material"],
    },
    {
      phase: "Implementation",
      duration: "10 days advance notice",
      requirements: [
        "Accessibility compliance",
        "Communication to audience",
        "Venue and logistics setup",
        "Prerequisites communication",
      ],
      deliverables: ["Training Delivery"],
    },
    {
      phase: "Evaluation",
      duration: "Ongoing",
      requirements: [
        "Assessment opportunities",
        "Feedback collection",
        "80% benchmark target",
        "Regular content review",
        "Performance measurement",
      ],
      deliverables: ["Evaluation Reports", "Improvement Plans"],
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
              <Link href="/programs" className="text-gray-600 hover:text-blue-600 transition-colors">
                Programs
              </Link>
              <Link href="/analytics" className="text-gray-600 hover:text-blue-600 transition-colors">
                Analytics
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
          <Badge className="mb-4 bg-red-100 text-red-800">Governance Framework</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning & Development Governance</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive governance framework ensuring consistency, quality, and compliance across all learning and
            development initiatives within MAF.
          </p>
        </div>

        <Tabs defaultValue="content" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="content">Content Governance</TabsTrigger>
            <TabsTrigger value="lms">LMS Governance</TabsTrigger>
            <TabsTrigger value="addie">ADDIE Framework</TabsTrigger>
            <TabsTrigger value="policies">Policies & Procedures</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Learning Content Governance</CardTitle>
                <CardDescription>
                  Comprehensive guide for creation, review, and maintenance of training content ensuring consistency,
                  quality, and compliance across MAF
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Purpose & Scope</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Ensure consistent and high-quality training content</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Enhance learning experience for all employees</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Align with organizational strategic objectives</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Foster culture of continuous learning</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Applicability</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm font-medium text-blue-900">Learning & Development Professionals</p>
                        <p className="text-xs text-blue-700">Content strategy and oversight</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-sm font-medium text-green-900">Content Creators</p>
                        <p className="text-xs text-green-700">Material development and design</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <p className="text-sm font-medium text-purple-900">Subject Matter Experts</p>
                        <p className="text-xs text-purple-700">Technical validation and review</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {contentRoles.map((roleData, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <roleData.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{roleData.role}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {roleData.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                          <span className="text-sm text-gray-600">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Content Approval Process</CardTitle>
                <CardDescription>Step-by-step workflow for content review and approval</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <h4 className="font-medium text-gray-900 text-sm">Content Creation</h4>
                    <p className="text-xs text-gray-500 mt-1">Initial draft by creators</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <h4 className="font-medium text-gray-900 text-sm">L&D Review</h4>
                    <p className="text-xs text-gray-500 mt-1">Educational effectiveness</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-purple-600 font-bold">3</span>
                    </div>
                    <h4 className="font-medium text-gray-900 text-sm">SME Review</h4>
                    <p className="text-xs text-gray-500 mt-1">Technical accuracy</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-orange-600 font-bold">4</span>
                    </div>
                    <h4 className="font-medium text-gray-900 text-sm">Legal Review</h4>
                    <p className="text-xs text-gray-500 mt-1">Compliance check</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-red-600 font-bold">5</span>
                    </div>
                    <h4 className="font-medium text-gray-900 text-sm">Revisions</h4>
                    <p className="text-xs text-gray-500 mt-1">Address feedback</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="w-6 h-6 text-gray-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 text-sm">Final Approval</h4>
                    <p className="text-xs text-gray-500 mt-1">Ready for publication</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Maintenance and Improvement</CardTitle>
                <CardDescription>Content lifecycle management and quality assurance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <h3 className="font-semibold text-gray-900">Content Validity</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Learning content is valid for 12 months from creation date. After this period, content must be
                      reviewed, revised, and approved before further use.
                    </p>
                    <Badge className="bg-blue-100 text-blue-800">12 Month Cycle</Badge>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Settings className="w-5 h-5 text-green-600" />
                      <h3 className="font-semibold text-gray-900">Quality Standards</h3>
                    </div>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Clear, professional language</li>
                      <li>• Consistent formatting and design</li>
                      <li>• Cultural sensitivity and inclusivity</li>
                      <li>• Brand guideline compliance</li>
                      <li>• Engaging and interactive elements</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="lms" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>LMS Governance Framework</CardTitle>
                <CardDescription>
                  Structured approach to managing, maintaining, and optimizing the Learning Management System
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Key Purposes</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Define standards and procedures for LMS usage</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Establish clear roles and responsibilities</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Guide decision-making processes</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Ensure compliance and security</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Facilitate continuous improvement</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Governance Benefits</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm font-medium text-blue-900">Consistency</p>
                        <p className="text-xs text-blue-700">Standardized processes across all business units</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-sm font-medium text-green-900">Efficiency</p>
                        <p className="text-xs text-green-700">Streamlined operations and clear accountability</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <p className="text-sm font-medium text-purple-900">Quality Assurance</p>
                        <p className="text-xs text-purple-700">Maintained standards and continuous monitoring</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {lmsRoles.map((roleData, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{roleData.admin}</CardTitle>
                      <Badge className={roleData.color}>
                        {roleData.admin.includes("Gold") ? "Gold Admin" : "Silver Admin"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {roleData.responsibilities.map((responsibility, respIndex) => (
                        <div key={respIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                          <span className="text-sm text-gray-600">{responsibility}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Content Upload Process</CardTitle>
                <CardDescription>Standardized procedure for LMS content management</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">SCORM Requirement</h4>
                    <p className="text-sm text-yellow-800">
                      SCORM files are the ONLY accepted format for content upload on our LMS. Multiple SCORM versions
                      supported: SCORM 1.2, SCORM 2004, SCORM 2004 4Ed.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">GS Team Responsibilities</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                          <span>Confirm SCORM file is properly configured</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                          <span>Test SCORM after upload before going live</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                          <span>Select suitable SCORM settings</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                          <span>Launch content for users after final testing</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Content Enhancement</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
                          <span>Delete inactive courses directly</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
                          <span>Check completion reports for active courses</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
                          <span>Confirm with business before deletion</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Reporting and Analytics Requirements</CardTitle>
                <CardDescription>Data management and reporting standards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Requirements</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span>Attendance upload within 30 days of training</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <AlertCircle className="w-4 h-4 text-red-600" />
                        <span>No backdated uploads without approval</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-green-600" />
                        <span>Monthly reporting by 25th of each month</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Available Reports</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Item Status Reports</li>
                      <li>• Learning Hours Tracking</li>
                      <li>• Learning History Analysis</li>
                      <li>• Learning Needs Assessment</li>
                      <li>• Program Status Overview</li>
                      <li>• Registration Reports</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="addie" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>ADDIE Model - Standard Framework</CardTitle>
                <CardDescription>
                  Systematic instructional design model ensuring effective, efficient, and appealing learning materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold text-lg">A</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">Analysis</h3>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-600 font-bold text-lg">D</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">Design</h3>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-purple-600 font-bold text-lg">D</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">Development</h3>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-orange-600 font-bold text-lg">I</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">Implementation</h3>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold text-lg">E</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">Evaluation</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {addiePhases.map((phase, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{phase.phase}</CardTitle>
                      <Badge variant="outline">{phase.duration}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {phase.requirements.map((requirement, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                              <span className="text-sm text-gray-600">{requirement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Deliverables</h4>
                        <div className="space-y-2">
                          {phase.deliverables.map((deliverable, delIndex) => (
                            <div key={delIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-sm text-gray-700">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Training Toolkit Requirements</CardTitle>
                <CardDescription>Mandatory components for all training programs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-medium text-gray-900">Participant Guide</h4>
                    <p className="text-xs text-gray-500 mt-1">Workbook format</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-medium text-gray-900">Facilitator Guide</h4>
                    <p className="text-xs text-gray-500 mt-1">Instructor manual</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Settings className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-medium text-gray-900">Presentation Deck</h4>
                    <p className="text-xs text-gray-500 mt-1">Visual aids</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Shield className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <h4 className="font-medium text-gray-900">Activities Material</h4>
                    <p className="text-xs text-gray-500 mt-1">Interactive components</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="policies" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Policies and Procedures</CardTitle>
                <CardDescription>Essential guidelines and standards for L&D operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Content Standards</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Clear, concise, and professional language</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Consistent formatting and design elements</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Cultural sensitivity and inclusivity</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Brand guideline compliance</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Engaging and interactive design</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Accessibility Requirements</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Screen reader compatibility</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Video captions and transcripts</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Alternative text for images</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Assistive technology support</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Universal design principles</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Communication Standards</CardTitle>
                <CardDescription>Guidelines for training communication and logistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold text-blue-900">Advance Notice</h4>
                    </div>
                    <p className="text-sm text-blue-800 mb-2">
                      All training details must be communicated to participants at least 10 days prior to the training
                      date.
                    </p>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li>• Date and time</li>
                      <li>• Venue information</li>
                      <li>• Prerequisites required</li>
                      <li>• Materials needed</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold text-green-900">Quality Benchmarks</h4>
                    </div>
                    <p className="text-sm text-green-800 mb-2">
                      Feedback survey benchmark is 80% satisfaction across all aspects of the learning experience.
                    </p>
                    <ul className="text-xs text-green-700 space-y-1">
                      <li>• Overall experience</li>
                      <li>• Content quality</li>
                      <li>• Logistics management</li>
                      <li>• Facilitator performance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Continuous Improvement Framework</CardTitle>
                <CardDescription>Systematic approach to enhancing L&D effectiveness</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-medium text-gray-900">Regular Review</h4>
                      <p className="text-sm text-gray-600 mt-1">Content and process evaluation</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-medium text-gray-900">Feedback Integration</h4>
                      <p className="text-sm text-gray-600 mt-1">Learner and stakeholder input</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <h4 className="font-medium text-gray-900">Performance Monitoring</h4>
                      <p className="text-sm text-gray-600 mt-1">Ongoing effectiveness tracking</p>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Upcoming Initiatives (2025)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Communities of Practice (Q2-2025)</li>
                        <li>• Enhanced Learning Surveys (Q1-2025)</li>
                      </ul>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Learning Impact Assessment Framework (Q4-2025)</li>
                        <li>• Post-Learning Assessments Integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button asChild variant="outline">
            <Link href="/analytics">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Analytics
            </Link>
          </Button>
          <Button asChild>
            <Link href="/">
              Return to Home
              <CheckCircle className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
