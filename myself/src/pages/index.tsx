import { Inter } from "next/font/google";
import Image from "next/image";
import { ArrowRight, Github, Mail, Quote, Twitter, Rss, MapPin, Linkedin, ExternalLink, Package, ArrowLeft, Globe } from "lucide-react";
import { Typing } from "@/components/typing";
import Projects from "@/components/projects";
import Link from "next/link";
import { cn, getImagePath } from "@/lib/utils";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import WordPullUp from "@/components/magicui/word-pull-up";
import Meteors from "@/components/magicui/meteors";
import { BorderBeam } from "@/components/magicui/border-beam";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [rootUrl, setRootUrl] = useState("");
  
  useEffect(() => {
    // 动态获取当前域名的根URL
    const origin = window.location.origin;
    setRootUrl(origin);
  }, []);

  return (
    <main className={inter.className}>
      {/* <Meteors /> */}
      <ScrollArea className={`w-full h-full`}>
        <div className={`flex flex-col p-6 space-y-4 max-w-[620px] mx-auto`}>
          <div className="mb-2 flex justify-between items-center">
            <a
              href={rootUrl}
              className="inline-flex items-center space-x-1 text-sm text-primary hover:underline transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blog Home</span>
            </a>
            <Link
              href="/cn"
              className="inline-flex items-center space-x-1 text-sm border rounded-md px-2 py-1 hover:bg-secondary/20 transition-colors"
            >
              <Globe className="h-3.5 w-3.5 mr-1" />
              <span className="font-medium">EN</span>
              <span className="mx-1 text-muted-foreground">|</span>
              <span>中文</span>
            </Link>
          </div>
          <IntroSection />
          <ContactSection />
          <SkillSection />
          <WorkExperienceSection />
          <CampusSection />
          {/* <ProjectSection /> */}
        </div>
        <Footer />
      </ScrollArea>
    </main>
  );
}

function IntroSection() {
  const [projectUrl, setProjectUrl] = useState("");

  useEffect(() => {
    // 动态获取当前域名的project路径
    const origin = window.location.origin;
    setProjectUrl(`${origin}/project`);
  }, []);

  return (
    <div className={`flex flex-col items-center justify-center`}>
      <a 
        href={projectUrl} 
        className="group relative w-full mb-4 overflow-hidden rounded-lg border shadow-md transition-all hover:shadow-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-70 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative flex items-center justify-between p-4">
          <div className="flex items-center">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 mr-3">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium">Check My Projects!</h3>
              <p className="text-sm text-muted-foreground">View my open source projects and contributions!</p>
            </div>
          </div>
          <div className="flex items-center space-x-1 bg-primary/10 rounded-full px-3 py-1 text-xs font-medium">
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </a>
      <Card
        className={`relative p-4 rounded-lg w-full h-fit flex flex-col pt-6 text-center md:text-left`}
      >
        <BorderBeam />
        <div
          className={`flex flex-col md:flex-row items-center justify-center mb-3`}
        >
          <div className={"w-20 h-20 md:mr-6 mb-4 md:mb-0"}>
            <img
              width={80}
              height={80}
              src="/myself/e9768a2ac59bb.jpg"
              alt="avatar"
              className={`rounded-full w-20 h-20 object-cover`}
            />
          </div>
          <div className={`flex flex-col justify-center`}>
            <h1 className={`text-2xl font-semibold`}>Hirsun HAN (Jiaming)</h1>
            <WordPullUp
              className={`text-base md:text-left font-normal mt-1`}
              words={"23 Y.o. / Hong Kong / CS & AI / CUHK"}
            />

            <div className="flex flex-wrap mt-2 justify-center">
            <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40 cursor-pointer transition-all hover:bg-secondary">
                Full Stack
              </span>
            <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40 cursor-pointer transition hover:bg-secondary">
                AI Agent & LLM
              </span>
              <span className="px-2 py-1 m-1 text-xs font-medium rounded-md border bg-secondary/40 cursor-pointer transition hover:bg-secondary">
                Cloud Computing
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap mb-3 justify-center items-center">
          <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="m-2 w-fit"
            >
              <img
                width={40}
                height={40}
                src="/myself/cert/0bca59a2487e4.png"
                alt="Certificate"
                className="h-12 object-contain"
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="m-2 w-fit"
            >
              <img
                width={40}
                height={40}
                src="/myself/cert/LevelBeta.png"
                alt="LevelBeta Certificate"
                className="h-12 object-contain"
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="m-2 w-fit"
            >
              <img
                width={40}
                height={40}
                src="/myself/cert/776496addc1ce.png"
                alt="Certificate"
                className="h-12 object-contain"
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="m-2 w-fit"
            >
              <img
                width={40}
                height={40}
                src="/myself/cert/776496addc1ce.png"
                alt="Certificate"
                className="h-12 object-contain"
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="m-2 w-fit"
            >
              <img
                width={40}
                height={40}
                src="/myself/cert/c68a6d1546719.png"
                alt="Certificate"
                className="h-12 object-contain"
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="m-2 w-fit"
            >
              <img
                width={40}
                height={40}
                src="/myself/cert/49c7e482253e6.png"
                alt="Certificate"
                className="h-12 object-contain"
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="m-2 w-fit"
            >
              <img
                width={40}
                height={40}
                src="/myself/cert/1327a3d9d969f.png"
                alt="Certificate"
                className="h-12 object-contain"
              />
            </a>
          </div>
          <div className={`flex justify-center space-x-4 pr-0.5`}>
            <Link
              href="https://github.com/guomaimang"
              target="_blank"
              className="ml-auto"
            >
              <Github className={`w-5 h-5`} />
            </Link>
            <Link href="https://linkedin.com/in/hanjiaming" target="_blank">
              <Linkedin className={`w-5 h-5`} />
            </Link>
            <Link href="mailto:hirsunmw@outlook.com" target="_blank">
              <Mail className={`w-5 h-5`} />
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}

function CampusSection() {
  const campuses = [
    {
      name: "Chinese University of Hong Kong",
      nameCn: "香港中文大学",
      logo: "/campus/cuhk.png",
      department: "Department of Information Engineering",
      degree: "Master of Science in Information Engineering",
      period: "Completed at 2025",
      current: false,
    },
    {
      name: "Hong Kong Polytechnic University",
      nameCn: "香港理工大学",
      logo: "/campus/polyu.png",
      department: "Department of Computing, Faculty of Engineering",
      degree: "Bachelor of Science Degree in Computing",
      period: "Completed at 2024",
    },
    {
      name: "Shanghai Jiao Tong University",
      nameCn: "上海交通大学",
      logo: "/campus/sjtu.png",
      department: "Electronic and Computer Engineering, UM-SJTU Joint Institute",
      degree: "Spring 2024 Semester Exchange",
      period: "2024.1 - 2024.6",
    },
    {
      name: "Hebei Hengshui High School",
      nameCn: "河北衡水中学",
      logo: "/campus/hszx.png",
      department: "Senior High School",
      degree: "Major in Science and Math",
      period: "2017.9 - 2020.6",
    },
  ];

  return (
    <Card className={`relative w-full h-fit p-6`}>
      <CardTitle>Campus</CardTitle>
      <div className="mt-4 space-y-4">
        {campuses.map((campus, index) => (
          <div 
            key={index} 
            className={`group relative flex flex-col border rounded-lg p-4 hover:bg-secondary/20 transition-colors`}
          >
            {campus.current && <BorderBeam colorFrom="#FFD700" colorTo="#FFA500" />}
            <div className="flex items-center mb-2">
              <div className="flex-shrink-0 h-10 mr-4 flex items-center">
                <img
                  src={`/myself${campus.logo}`}
                  alt={`${campus.name} logo`}
                  className="h-full max-w-[150px] object-contain"
                />
              </div>
              <div className="ml-auto text-right">
                <span className="text-xs px-2 py-1 rounded-full bg-secondary/40">
                  {campus.period}
                </span>
                {campus.current && (
                  <span className="ml-2 text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                    Current
                  </span>
                )}
              </div>
            </div>
            
            <div>
              <div className="flex items-baseline flex-wrap">
                <h3 className="text-base font-medium mr-2">{campus.name}</h3>
                <span className="text-sm text-muted-foreground">{campus.nameCn}</span>
              </div>
              
              <div className="mt-1 space-y-1">
                <p className="text-sm text-muted-foreground">{campus.degree}</p>
                <p className="text-sm text-muted-foreground">{campus.department}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function ProjectSection() {
  return (
    <Card className={`relative w-full h-fit p-6`}>
      <CardTitle>Project Experience</CardTitle>
      <Projects
        data={[
          {
            title: "CoAI.Dev",
            avatar: "chatnio.webp",
            description:
              "🚀 Next Generation AI One-Stop Internationalization Solution.",
            tags: ["K8s", "Go", "React", "TypeScript", "WebSocket", "PWA"],
            link: "https://coai.dev",
            stars: "6k+",
            sold: true,
          },
          {
            title: "FyStart",
            avatar: "fystart.webp",
            description:
              "🍏 AI-powered beautiful and lightweight start page. Features cloud sync, PWA offline access, and various components including quotes, toolbox, cards, search suggestions, and translations.",
            tags: ["Go", "Vue", "PWA", "Service Worker"],
            link: "https://github.com/Deeptrain-Community/fystart",
            stars: "0.1k",
          },
          {
            title: "Next Whois UI",
            description:
              "🧪 Your Next-Gen Whois Lookup Tool With Modern UI. Support Domain/IPv4/IPv6/ASN/CIDR Whois Lookup And Powerful Features. ",
            tags: ["Next.js", "TypeScript", "Whois Lookup"],
            link: "https://github.com/zmh-program/next-whois-ui",
            stars: "0.2k",
          },
          {
            title: "Code Statistic",
            avatar: "stats.webp",
            description:
              "⚡ Dynamically generate your GitHub stat cards! Featuring User, Repo, Contributor, Release, Issue, and PR Cards. Supports dark mode and API integration. Explore the possibilities!",
            tags: ["Go", "PHP", "JavaScript", "Edge Computing"],
            link: "https://stats.deeptrain.net",
          },
          {
            title: "Web Mirai Panel",
            avatar: "webchatgpt.webp",
            description:
              "🤖 Web UI of ChatGPT Mirai Bot, multi-instance management support, conf editing, health check, terminal execution, support for password access.",
            tags: ["Python", "Vue", "Mirai", "Docker Core"],
            link: "https://github.com/zmh-program/web-chatgpt-qq-bot",
            stars: "0.2k",
          },
          {
            title: "Lyrify",
            avatar: "lyrify.webp",
            description:
              "🔍 Aggregated translation platform, supports simultaneous translation with multiple translation engines, offers various translation result displays and comparison of translation results",
            tags: ["Next.js", "TypeScript"],
            link: "https://github.com/SIPC/Lyrify",
          },
        ]}
      />
    </Card>
  );
}


function WorkExperienceSection() {
  const experiences = [
    {
      company: "Tencent Hong Kong (腾讯香港)",
      logo: "/logo/txcloud.png",
      position: "Cloud Architecture, Tencent Cloud",
      period: "2025.7 - Present",
      location: "Tsim Sha Tsui, Hong Kong SAR",
    },
    {
      company: "Bytedance (字节跳动)",
      logo: "/logo/bytedance.png",
      position: "Cloud Conputing, Volcano Engine (火山引擎)",
      period: "2025.3 - 2025.5",
      location: "Shenzhen, China",
    },
    {
      company: "Tencent (腾讯科技)",
      logo: "/logo/tencent.png",
      position: "App Development, Interactive Entertainment Group",
      period: "2024.5 - 2024.11",
      location: "Shenzhen, China",
    },
    {
      company: "PwC HK (普华永道香港)",
      logo: "/logo/pwc.jpg",
      position: "Digital Consulting (Finance Team)",
      period: "2023.1 - 2023.6",
      location: "Central, Hong Kong SAR",
    },
  ];

  return (
    <Card className={`relative w-full h-fit p-6`}>
      <CardTitle>Work Experience</CardTitle>
      <div className="mt-4 grid grid-cols-1 gap-4">
        {experiences.map((exp, index) => (
          <div key={index} className="group flex items-center p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
            <div className="flex-shrink-0 w-16 h-16 mr-4 flex items-center justify-center">
              <img
                src={`/myself${exp.logo}`}
                alt={`${exp.company} logo`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div>
              <span className="text-base font-medium">{exp.company}</span>

              <p className="text-sm text-muted-foreground">
                <span className="inline-block mr-2">{exp.period}</span>
              </p>

              <p className="text-sm text-muted-foreground">{exp.position}</p>

              <p className="text-sm text-muted-foreground">{exp.location}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function ContactSection() {
  return (
    <Card className={`relative w-full h-fit p-4`}>
      <CardTitle className="text-base mb-2">Contact Info</CardTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="group flex items-center p-2 border rounded-lg hover:bg-secondary/20 transition-colors">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/30 mr-2">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-medium">Current Location</span>
            <p className="text-xs text-muted-foreground">Wan Chai, Hong Kong</p>
          </div>
        </div>
        
        <a href="mailto:hirsunmw@outlook.com" onClick={(e) => { e.stopPropagation(); }} className="group flex items-center p-2 border rounded-lg hover:bg-secondary/20 transition-colors no-underline cursor-pointer">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/30 mr-2">
            <Mail className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <span className="text-xs font-medium">Email</span>
            <p className="text-xs text-muted-foreground flex items-center">
              hirsunmw@outlook.com
              <span className="ml-1 text-[10px] px-1 bg-primary/10 text-primary rounded"> Fast</span>
            </p>
          </div>
          <ExternalLink className="w-3 h-3 text-muted-foreground" />
        </a>
        
        <a href="https://github.com/guomaimang" target="_blank" rel="noopener noreferrer" className="group flex items-center p-2 border rounded-lg hover:bg-secondary/20 transition-colors no-underline cursor-pointer">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/30 mr-2">
            <Github className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <span className="text-xs font-medium">Github</span>
            <p className="text-xs text-muted-foreground">@guomaimang</p>
          </div>
          <ExternalLink className="w-3 h-3 text-muted-foreground" />
        </a>
        
        <a href="https://linkedin.com/in/hanjiaming" target="_blank" rel="noopener noreferrer" className="group flex items-center p-2 border rounded-lg hover:bg-secondary/20 transition-colors no-underline cursor-pointer">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/30 mr-2">
            <Linkedin className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <span className="text-xs font-medium">LinkedIn</span>
            <p className="text-xs text-muted-foreground">@hanjiaming</p>
          </div>
          <ExternalLink className="w-3 h-3 text-muted-foreground" />
        </a>
      </div>
    </Card>
  );
}

function SkillSection() {
  const techIconsInner = ["java", "python", "vite", "react", "aws", "mysql", "nodejs"];

  const techIconsOuter = [
    "redhat",
    "prometheus",
    "azure",
    "docker",
    "kubernetes",
    "nginx",
    "redis",
    "rabbitmq",
    "docker",
  ];

  const techIconsInnerDelay = 100 / techIconsInner.length;
  const techIconsOuterDelay = 100 / techIconsOuter.length;

  const techCategories = [
    "SDE",
    "AI & LLM",
    "Architecture"
  ];

  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // 初始检查
    checkIfMobile();
    
    // 监听窗口大小变化
    window.addEventListener('resize', checkIfMobile);
    
    // 清理监听器
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <Card className={`relative w-full h-fit p-6`}>
      <CardTitle>Tech Stack</CardTitle>

      <div className="flex flex-wrap gap-2 mt-2">
        {techCategories.map((tag, index) => (
          <span
            key={index}
            className="text-sm border rounded px-1.5 py-1 whitespace-nowrap cursor-pointer transition-all duration-300 ease-in-out hover:bg-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="relative flex h-[160px] sm:h-[200px] select-none w-full flex-col items-center justify-center mt-4 overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
          {"</>"}
        </span>
        {/* Inner Circles */}
        {techIconsInner.map((icon, index) => (
          <OrbitingCircles
            key={index}
            className={`${isMobile ? 'size-[25px]' : 'size-[30px]'} border-none bg-transparent`}
            duration={20}
            delay={index * techIconsInnerDelay}
            radius={isMobile ? 60 : 80}
          >
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={`${icon} Icon`}
              className="w-full h-full object-contain"
            />
          </OrbitingCircles>
        ))}

        {/* Outer Circles (reverse) */}
        {techIconsOuter.map((icon, index) => (
          <OrbitingCircles
            key={index}
            className={`${isMobile ? 'size-[40px]' : 'size-[50px]'} border-none bg-transparent`}
            radius={isMobile ? 120 : 190}
            duration={20}
            delay={index * techIconsOuterDelay}
            reverse
          >
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={`${icon} Icon`}
              className="w-full h-full object-contain"
            />
          </OrbitingCircles>
        ))}
      </div>
      <div className="mt-2 text-center text-sm text-muted-foreground">
        <a 
          href="https://whois.aliyun.com/domain/hanjiaming.com.cn" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:underline"
        >
          <span>{new Date().getFullYear() - 2016 + 1} Years Journey (Since 2016).</span>
        </a>
      </div>
    </Card>
  );
}

function Footer() {
  return (
    <div className={`footer py-6 px-4 text-center text-sm`}>
      <div> Hirsun's Blog | Serving Since 2011.</div>
    </div>
  );
}
