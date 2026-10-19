export interface Student {
  id: string;
  name: string;
  avatar: string;
  track: string;
  readinessScore: number; // 0 - 100
  status: 'Corporate Ready' | 'Needs Polish' | 'At Risk';
  targetRole: string;
  interviewer: string;
  interviewDate: string;
  metrics: {
    dsa: number;
    systemDesign: number;
    codeQuality: number;
    communication: number;
    debugging: number;
    behavioral: number;
  };
  strengths: string[];
  growthAreas: string[];
  interviewerSummary: string;
  actionPlan: string[];
}

export interface Cohort {
  id: string;
  name: string;
  institute: string;
  batchCode: string;
  totalStudents: number;
  completedMocks: number;
  avgReadiness: number;
  readyCount: number;
  polishCount: number;
  atRiskCount: number;
  students: Student[];
}

export interface SimulatorQuestion {
  id: string;
  title: string;
  difficulty: 'Junior Corporate' | 'Mid-Level SDE' | 'Senior Bar';
  category: string;
  description: string;
  timeLimit: string;
  starterCode: {
    javascript: string;
    python: string;
    java: string;
  };
  solutionHint: string;
  testCases: { input: string; expected: string }[];
  evaluationRubric: {
    name: string;
    maxScore: number;
    description: string;
  }[];
}

export const COHORTS_DATA: Cohort[] = [
  {
    id: 'cohort-1',
    name: 'Full Stack Web & Microservices (Batch #24)',
    institute: 'CodeSprint Academy',
    batchCode: 'FS-2026-B24',
    totalStudents: 42,
    completedMocks: 42,
    avgReadiness: 86,
    readyCount: 29,
    polishCount: 10,
    atRiskCount: 3,
    students: [
      {
        id: 'std-1',
        name: 'Aisha Khan',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        track: 'Full Stack MERN & Cloud',
        readinessScore: 92,
        status: 'Corporate Ready',
        targetRole: 'SDE-1 / Full Stack Engineer',
        interviewer: 'Sarah Chen (Senior Staff at CloudScale)',
        interviewDate: 'Oct 12, 2026',
        metrics: {
          dsa: 90,
          systemDesign: 88,
          codeQuality: 95,
          communication: 92,
          debugging: 94,
          behavioral: 93,
        },
        strengths: [
          'Exceptional clean code with TypeScript strict mode',
          'Proactively analyzed time/space complexity before coding',
          'Structured STAR behavioral answers with clear metrics',
        ],
        growthAreas: [
          'Could dive deeper into database indexing & partition trade-offs',
        ],
        interviewerSummary:
          'Aisha demonstrates top-quartile junior talent. She articulates architectural trade-offs calmly under pressure and produces production-grade modular code.',
        actionPlan: [
          'Review PostgreSQL B-Tree vs Hash index optimization',
          'Practice 2 complex asynchronous concurrency problems',
          'Ready for Tier-1 corporate tech drives immediately',
        ],
      },
      {
        id: 'std-2',
        name: 'Rohan Mehta',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
        track: 'Backend Java & Spring Boot',
        readinessScore: 84,
        status: 'Corporate Ready',
        targetRole: 'Backend Engineer (Java/Cloud)',
        interviewer: 'Vikram Joshi (Lead Architect at FinTechCorp)',
        interviewDate: 'Oct 10, 2026',
        metrics: {
          dsa: 82,
          systemDesign: 85,
          codeQuality: 88,
          communication: 79,
          debugging: 86,
          behavioral: 84,
        },
        strengths: [
          'Solid grasp of REST vs gRPC communication patterns',
          'Handled database transaction isolation levels with ease',
          'Strong unit test mindset using JUnit/Mockito patterns',
        ],
        growthAreas: [
          'Speaks slightly too fast when explaining algorithms',
          'Needs to ask clarifying questions before jumping into code',
        ],
        interviewerSummary:
          'Rohan has solid technical foundations and code hygiene. With slight polish on executive communication and deliberate pacing, he will clear SDE-1 rounds effortlessly.',
        actionPlan: [
          'Adopt the 2-minute clarifying question ritual before coding',
          'Mock-practice behavioral conflict resolution questions',
        ],
      },
      {
        id: 'std-3',
        name: 'Kavita Sundaram',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
        track: 'React, Next.js & Frontend Systems',
        readinessScore: 76,
        status: 'Needs Polish',
        targetRole: 'Frontend Engineer',
        interviewer: 'Arjun Das (Frontend Principal at SaaSify)',
        interviewDate: 'Oct 09, 2026',
        metrics: {
          dsa: 68,
          systemDesign: 75,
          codeQuality: 84,
          communication: 80,
          debugging: 72,
          behavioral: 78,
        },
        strengths: [
          'Deep understanding of React reconciliation & DOM updates',
          'Excellent CSS layouts, accessibility, and micro-interactions',
        ],
        growthAreas: [
          'Struggled with tree traversal recursion time complexity',
          'Freezes momentarily when edge case test fails',
        ],
        interviewerSummary:
          'Kavita has great visual and frontend engineering instincts. However, her data structure fundamentals need a 10-day intensive brush-up before top-tier product company rounds.',
        actionPlan: [
          'Complete CandiDev 7-Day Tree/Graph algorithmic drill',
          'Practice vocalizing thought processes while debugging runtime errors',
        ],
      },
      {
        id: 'std-4',
        name: 'Devraj Mukherjee',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
        track: 'Full Stack & DevOps',
        readinessScore: 58,
        status: 'At Risk',
        targetRole: 'Junior DevOps / SDE',
        interviewer: 'Maya Al-Mansoor (DevOps Director at HyperScale)',
        interviewDate: 'Oct 08, 2026',
        metrics: {
          dsa: 52,
          systemDesign: 60,
          codeQuality: 62,
          communication: 65,
          debugging: 50,
          behavioral: 59,
        },
        strengths: [
          'Enthusiastic attitude and knows basic Docker container commands',
        ],
        growthAreas: [
          'High syntax memorization without algorithmic intuition',
          'Inability to analyze memory leaks or O(N^2) bottlenecks',
          'Answers behavioral questions vaguely without concrete STAR examples',
        ],
        interviewerSummary:
          'Devraj requires intervention. Currently exhibits bootcamp-memorization patterns that fail modern corporate technical screens. Needs 2 weeks of guided code-along problem solving.',
        actionPlan: [
          'Institute mentor to conduct 1-on-1 fundamental DSA diagnostics',
          'Re-mock scheduled in 14 days under CandiDev SDE-Junior track',
        ],
      },
      {
        id: 'std-5',
        name: 'Meera Nambiar',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
        track: 'Python, Django & API Engineering',
        readinessScore: 94,
        status: 'Corporate Ready',
        targetRole: 'Backend / Python SDE-1',
        interviewer: 'David Evans (Tech Lead at FinStream)',
        interviewDate: 'Oct 11, 2026',
        metrics: {
          dsa: 95,
          systemDesign: 92,
          codeQuality: 96,
          communication: 94,
          debugging: 95,
          behavioral: 92,
        },
        strengths: [
          'Flawless problem deconstruction and edge case anticipation',
          'Wrote clean idiomatic Python with type hints and docstrings',
          'Handled system scaling bottlenecks with graceful degradation strategies',
        ],
        growthAreas: [
          'Minor hesitation on distributed consensus protocols (Raft/Paxos)',
        ],
        interviewerSummary:
          'Outstanding candidate. Meera operates at an experienced SDE-1 level. High probability of receiving top-bracket corporate offers.',
        actionPlan: [
          'Highlight system design projects on resume',
          'Submit directly to Tier-1 hiring partners via CandiDev FastTrack',
        ],
      },
    ],
  },
  {
    id: 'cohort-2',
    name: 'Java Microservices & Cloud Enterprise (Q3 Cohort)',
    institute: 'NexGen Tech Institute',
    batchCode: 'JMC-2026-Q3',
    totalStudents: 35,
    completedMocks: 35,
    avgReadiness: 81,
    readyCount: 22,
    polishCount: 9,
    atRiskCount: 4,
    students: [],
  },
  {
    id: 'cohort-3',
    name: 'Data Science & Applied AI Track (Batch Alpha)',
    institute: 'DataVanguard School of AI',
    batchCode: 'AI-2026-A1',
    totalStudents: 28,
    completedMocks: 28,
    avgReadiness: 88,
    readyCount: 21,
    polishCount: 6,
    atRiskCount: 1,
    students: [],
  },
];

export const SIMULATOR_QUESTIONS: SimulatorQuestion[] = [
  {
    id: 'q-1',
    title: 'Sliding Window Maximum & Stream Latency Optimizer',
    difficulty: 'Mid-Level SDE',
    category: 'Algorithms & Data Structures',
    description: `You are building a real-time event pipeline for an enterprise telemetry stream. Given an array of numeric response times 'nums' and an integer window size 'k', return the maximum response time seen in each contiguous window of size 'k' sliding from left to right.
    
Your solution must achieve O(N) time complexity. Brute force O(N*k) will be flagged as sub-corporate standard during technical review.`,
    timeLimit: '45 mins',
    starterCode: {
      javascript: `// Candidate: Aisha Khan | Interviewer: Sarah Chen
// Task: Implement O(N) Sliding Window Maximum using a Monotonic Deque

function maxSlidingWindow(nums, k) {
  if (!nums || nums.length === 0 || k <= 0) return [];
  const result = [];
  const deque = []; // Store indices of candidate maximums

  for (let i = 0; i < nums.length; i++) {
    // 1. Remove indices outside current sliding window
    if (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }

    // 2. Maintain monotonic decreasing order in deque
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    // 3. Add current index
    deque.push(i);

    // 4. Record maximum once window reaches size k
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

// Interactive Simulation Test:
const testStream = [1, 3, -1, -3, 5, 3, 6, 7];
const windowSize = 3;
console.log("Window Max Output:", maxSlidingWindow(testStream, windowSize));`,
      python: `# Candidate: Aisha Khan | Interviewer: Sarah Chen
from collections import deque

def max_sliding_window(nums, k):
    if not nums or k <= 0:
        return []
    
    deq = deque()
    result = []
    
    for i, n in enumerate(nums):
        # Discard expired indices
        if deq and deq[0] <= i - k:
            deq.popleft()
            
        # Maintain monotonic order
        while deq and nums[deq[-1]] < n:
            deq.pop()
            
        deq.append(i)
        
        # Record max
        if i >= k - 1:
            result.append(nums[deq[0]])
            
    return result

print(max_sliding_window([1, 3, -1, -3, 5, 3, 6, 7], 3))`,
      java: `// Candidate: Aisha Khan | Interviewer: Sarah Chen
import java.util.*;

public class StreamOptimizer {
    public int[] maxSlidingWindow(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0) return new int[0];
        int n = nums.length;
        int[] result = new int[n - k + 1];
        Deque<Integer> deque = new ArrayDeque<>();
        
        for (int i = 0; i < n; i++) {
            if (!deque.isEmpty() && deque.peekFirst() <= i - k) {
                deque.pollFirst();
            }
            while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
                deque.pollLast();
            }
            deque.offerLast(i);
            if (i >= k - 1) {
                result[i - k + 1] = nums[deque.peekFirst()];
            }
        }
        return result;
    }
}`,
    },
    solutionHint: 'Use a double-ended queue (monotonic deque) storing indices to guarantee O(N) linear time and O(k) extra space.',
    testCases: [
      { input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3', expected: '[3, 3, 5, 5, 6, 7]' },
      { input: 'nums = [1], k = 1', expected: '[1]' },
      { input: 'nums = [9, 11], k = 2', expected: '[11]' },
    ],
    evaluationRubric: [
      { name: 'Algorithmic Complexity & Monotonic Deque', maxScore: 25, description: 'Correctly identifies O(N) approach instead of nested loops' },
      { name: 'Boundary & Edge Case Handling', maxScore: 20, description: 'Handles k > nums.length, negative numbers, single element windows' },
      { name: 'Live Coding Hygiene & Variable Naming', maxScore: 25, description: 'Clean indentation, descriptive pointers, no dead code' },
      { name: 'Verbalized Thought Process', maxScore: 30, description: 'Communicates clearly before typing and dry-runs test cases aloud' },
    ],
  },
  {
    id: 'q-2',
    title: 'High-Concurrency In-Memory LRU Cache with TTL',
    difficulty: 'Senior Bar',
    category: 'System Design & Data Structures',
    description: `Design a Least Recently Used (LRU) Cache that supports get(key) and put(key, value) in O(1) average time complexity, with an optional time-to-live (TTL) expiration per entry.
    
Discuss concurrency considerations: how would you prevent race conditions when multiple worker threads evict items simultaneously?`,
    timeLimit: '45 mins',
    starterCode: {
      javascript: `class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // Preserves insertion order in JS
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    // Refresh recency
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // Evict least recently used (first key in map iterator)
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, value);
  }
}`,
      python: `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = OrderedDict()

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        elif len(self.cache) >= self.capacity:
            self.cache.popitem(last=False)
        self.cache[key] = value`,
      java: `import java.util.*;

public class LRUCache {
    class Node {
        int key, val;
        Node prev, next;
        Node(int k, int v) { key = k; val = v; }
    }
    
    private final int capacity;
    private final Map<Integer, Node> map = new HashMap<>();
    private final Node head = new Node(0, 0);
    private final Node tail = new Node(0, 0);

    public LRUCache(int capacity) {
        this.capacity = capacity;
        head.next = tail;
        tail.prev = head;
    }
}`,
    },
    solutionHint: 'Hash Map + Doubly Linked List guarantees true O(1) lookups and re-linking upon cache eviction.',
    testCases: [
      { input: 'put(1, 1), put(2, 2), get(1), put(3, 3), get(2)', expected: 'get(1)->1, get(2)->-1 (evicted)' },
    ],
    evaluationRubric: [
      { name: 'Data Structure Selection (HashMap + DLL)', maxScore: 30, description: 'Explains why Map alone in other languages needs doubly linked list' },
      { name: 'O(1) Strict Guarantee', maxScore: 25, description: 'Ensures no O(N) operations exist in reordering' },
      { name: 'Concurrency & Locking Architecture', maxScore: 25, description: 'Discusses ReadWriteLock, Segmented Caching (like ConcurrentHashMap)' },
      { name: 'Code Modularity & Memory Safety', maxScore: 20, description: 'Proper cleanup of orphaned nodes and memory leak prevention' },
    ],
  },
];

export const SERVICE_PILLARS = [
  {
    id: 'pillar-1',
    icon: 'Terminal',
    title: 'DSA & Algorithmic Problem Solving',
    subtitle: 'Live Whiteboard & Code Execution',
    badge: 'Core Foundation',
    description:
      'Rigorous 45-minute live coding rounds conducted on our custom IDE. We test time/space optimization, edge-case vigilance, and verbal thought deconstruction under real interview pressure.',
    bulletPoints: [
      'Unscripted live problems (No memorized LeetCode clones)',
      'Assessment of dry-running and vocal problem solving',
      'Instant code quality & Big-O notation benchmark',
    ],
  },
  {
    id: 'pillar-2',
    icon: 'Layers',
    title: 'Full Stack & System Architecture',
    subtitle: 'Real-world Corporate Code Review',
    badge: 'Industry Standard',
    description:
      'Deep dive into candidate GitHub projects, backend microservice architecture, API design, database indexing, caching strategies, and frontend state management.',
    bulletPoints: [
      'Architectural trade-off defense (SQL vs NoSQL, Monolith vs Microservices)',
      'Security, rate-limiting, and error-boundary audit',
      'Realistic production scenario troubleshooting',
    ],
  },
  {
    id: 'pillar-3',
    icon: 'Users',
    title: 'Corporate Soft Skills & Behavioral (STAR)',
    subtitle: 'Executive Presence & Culture Fit',
    badge: 'High Rejection Area',
    description:
      'Over 60% of technically sound students fail due to poor articulation. Our senior hiring managers drill candidates on the STAR method, conflict management, and corporate etiquette.',
    bulletPoints: [
      'STAR method (Situation, Task, Action, Result) structuring',
      'Salary negotiation poise and professional presence',
      'Elimination of filler words, hesitation, and ambiguity',
    ],
  },
  {
    id: 'pillar-4',
    icon: 'FileCheck',
    title: '360° Diagnostic Report & Action Plan',
    subtitle: 'Actionable 14-Day Remediation',
    badge: 'For Institute Directors',
    description:
      'Within 2 hours of the interview, the institute and student receive a 10-parameter breakdown report with timestamped interviewer notes, benchmark percentiles, and remedial roadmaps.',
    bulletPoints: [
      '10-point corporate readiness scoring index',
      'Full session recording with mentor commentary bookmarks',
      'Clear verdict: Corporate Ready, Needs Polish, or Critical Risk',
    ],
  },
  {
    id: 'pillar-5',
    icon: 'ShieldCheck',
    title: 'Corporate Readiness Certification',
    subtitle: 'Verified Proof of Competency',
    badge: 'Placement Booster',
    description:
      'Students passing the CandiDev Corporate Threshold receive a cryptographically verifiable Digital Competency Badge that institutes can showcase directly to hiring partners.',
    bulletPoints: [
      'Recognized by 70+ partner corporate hiring managers',
      'Direct link to candidate rubric & code replay',
      'Increases corporate shortlist conversion by 3.4x',
    ],
  },
  {
    id: 'pillar-6',
    icon: 'BarChart3',
    title: 'Institute Cohort Intelligence Dashboard',
    subtitle: 'Batch Analytics for Placement Heads',
    badge: 'Dean & Director Portal',
    description:
      'Real-time macro view of your batches. Know exactly which student is ready for high-CTC corporate drives and which students need curriculum reinforcement before company visits.',
    bulletPoints: [
      'Batch-wide skill gap heatmaps (DSA vs Backend vs Comms)',
      'Placement readiness forecasting & risk alarms',
      'One-click export of batch report for corporate hiring partners',
    ],
  },
];

export const COMPARISON_ROWS = [
  {
    feature: 'Interviewer Quality',
    instituteInternal: 'Internal faculty / trainers who already know the student',
    candiDev: 'External Senior Engineers & Hiring Managers from FAANG & Tier-1 Product Tech',
    advantage: true,
  },
  {
    feature: 'Interview Realism & Pressure',
    instituteInternal: 'Predictable, casual classroom questions with low psychological pressure',
    candiDev: 'Unscripted corporate simulation with strict 45-60 min time constraint & live debugging',
    advantage: true,
  },
  {
    feature: 'Evaluation Rubric',
    instituteInternal: 'Subjective pass/fail or generic 1-5 star rating',
    candiDev: 'Standardized 10-parameter corporate matrix (Big-O, Code Cleanliness, STAR, Poise)',
    advantage: true,
  },
  {
    feature: 'Feedback & Remediation',
    instituteInternal: 'Brief 2-minute verbal remark: "Practice more DSA"',
    candiDev: 'Comprehensive 4-page diagnostic report with timestamped notes + 14-day action roadmap',
    advantage: true,
  },
  {
    feature: 'Hiring Partner Value',
    instituteInternal: 'Hiring companies do not trust internal institute marks',
    candiDev: 'Third-party verified Corporate Readiness Scorecard that hiring managers respect',
    advantage: true,
  },
  {
    feature: 'Trainer Workload Saved',
    instituteInternal: 'Trainers burn 80-120 hours conducting mocks instead of teaching',
    candiDev: 'Zero burden on institute trainers; CandiDev handles 100% of scheduling & execution',
    advantage: true,
  },
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    quote:
      'Before CandiDev, 60% of our students cleared the initial resume screen but got rejected in technical Round 1. After conducting CandiDev corporate mocks, our batch placement conversion soared from 48% to 84% in just two hiring seasons.',
    author: 'Dr. Rajeshwari Sen',
    role: 'Director of Placements',
    organization: 'Apex Institute of Software Technology',
    stats: '+36% Placement Rate Increase',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 't-2',
    quote:
      'Our trainers were exhausted trying to take 1-on-1 mocks for 150 students while finishing syllabus. CandiDev stepped in like a premier corporate testing partner. The diagnostic scorecards gave our students the exact corporate mirror they needed.',
    author: 'Karthik Ramanathan',
    role: 'Founder & CEO',
    organization: 'FullStackForge Bootcamps',
    stats: '140+ Trainer Hours Saved Per Cohort',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 't-3',
    quote:
      'The corporate readiness scorecards are pure gold. We now send CandiDev verified scorecards directly to our tier-1 hiring partners, and companies are waiving off initial screening rounds for our top 25% students!',
    author: 'Sunil Bhatia',
    role: 'Head of Industry Alliances',
    organization: 'MetroCode Academy',
    stats: 'Avg Student CTC increased by 2.4x',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  },
];

export const FAQS = [
  {
    q: 'How does CandiDev partner with training institutes?',
    a: 'We operate as your dedicated Corporate Mock Interview & Technical Assessment division. You provide us with your batch roster and chosen technical tracks (Full Stack, Java, Python, Frontend, DevOps). We assign senior industry engineers, schedule slots seamlessly through our automated booking portal, conduct 1-on-1 mocks, and provide full cohort intelligence dashboards.',
  },
  {
    q: 'Who are the interviewers taking the mocks?',
    a: 'All CandiDev interviewers are active senior software engineers, tech leads, and hiring managers from top-tier product companies (FAANG, unicorn startups, and global fintechs) with a minimum of 4+ years of professional experience. They interview students with the exact standards and scrutiny they use internally.',
  },
  {
    q: 'What kind of reports does the institute receive?',
    a: 'The institute placement office receives a centralized Cohort Intelligence Dashboard showing overall readiness distributions, skill heatmaps (DSA, System Design, Communication, Debugging), and individual student scorecards. Each student receives a detailed 10-parameter breakdown, timestamped interview video bookmarks, and a 14-day prioritized action plan.',
  },
  {
    q: 'Can institutes customize the mock interview questions and rubrics?',
    a: 'Absolutely. While we provide standardized corporate benchmark rubrics (Junior SDE, Mid SDE, Enterprise Specialist), we regularly align with institute curriculum milestones, specific hiring partner criteria, or client-specific mock drives (e.g. Amazon bar, FinTech security bar, Frontend performance bar).',
  },
  {
    q: 'How quickly can we launch a pilot batch?',
    a: 'You can launch a pilot batch within 48 hours of onboarding. We provide an intuitive batch upload interface where students can self-schedule their slots, or the institute coordinator can assign dedicated mock windows.',
  },
  {
    q: 'What is the pricing model for institutes?',
    a: 'We offer flexible volume-based pricing designed specifically for institutes and bootcamps. Pricing scales dynamically based on cohort size (from 15 students to 500+ students) with tiered discounts, ranging from single-round technical screens to comprehensive 3-round corporate evaluation packages.',
  },
];

// --- 1. WHO ARE WE DATA ---
export const WHO_WE_ARE_DATA = {
  tagline: 'Bridging the Chasm Between Academic Coding & Ruthless Corporate Hiring Bars',
  mission:
    'To eliminate placement anxiety and interview failure by providing candidates and colleges with real-time, unfiltered evaluations conducted exclusively by senior corporate tech leaders from top product companies.',
  vision:
    'A world where every engineering student steps into campus placement drives with proven, benchmarked corporate readiness—proven by data, not guesswork.',
  story:
    'CandiDev was founded in 2023 by former engineering managers and staff developers from Google, Amazon, and Microsoft. Having interviewed thousands of candidates across campuses and industry, we observed a heartbreaking pattern: over 70% of capable students were rejected in Round 1 simply because academic syllabi and casual peer mocks never exposed them to unscripted corporate pressure, live Big-O trade-off defense, or structured STAR articulation.',
  metrics: [
    { label: 'Active FAANG & Tier-1 Mentors', value: '250+' },
    { label: 'Mock Rounds Completed', value: '18,500+' },
    { label: 'Corporate Hiring Partners', value: '420+' },
    { label: 'Colleges & Universities Tied Up', value: '85+' },
  ],
  pillars: [
    {
      title: '100% Active Corporate Veterans',
      desc: 'No academic lecturers or unvetted freelancers. Every interviewer is an active corporate engineer or hiring manager at tier-1 product companies.',
      badge: 'Uncompromised Bar',
    },
    {
      title: 'Standardized 10-Point Hiring Rubric',
      desc: 'Zero subjective guesswork. Students are calibrated against the exact quantitative criteria used in Google, Amazon, and top enterprise hiring committees.',
      badge: 'Transparent Matrix',
    },
    {
      title: 'Turnkey Institutional Command',
      desc: 'Colleges receive real-time cohort readiness heatmaps, identifying skill deficits weeks before campus recruiters set foot on campus.',
      badge: 'Placement Assurance',
    },
    {
      title: 'Radical Feedback & Remediation',
      desc: 'No vague "practice more" advice. Full 4-page diagnostic report with timestamped video annotations and custom 14-day study action roadmaps.',
      badge: 'Actionable Uplift',
    },
  ],
  leadership: [
    {
      name: 'Aditya Vardhan',
      role: 'Co-Founder & Head of Corporate Bar',
      pedigree: 'Ex-Staff Engineer at Google & Amazon (11+ yrs)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80',
      quote: 'We built CandiDev so students face the ruthless corporate hiring bar in training, not on their dream placement day.',
    },
    {
      name: 'Priyanka Sen',
      role: 'Co-Founder & VP of College Alliances',
      pedigree: 'Ex-Engineering Lead at Microsoft & Atlassian (9+ yrs)',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80',
      quote: 'Our mission is to empower university placement heads with the exact real-time telemetry corporate recruiters look for.',
    },
    {
      name: 'Rohan Deshmukh',
      role: 'Head of Evaluation & Rubric Sciences',
      pedigree: 'Principal Architect, ex-Uber & Razorpay (12+ yrs)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80',
      quote: 'Standardized, unbiased rubrics protect candidates from arbitrary recruiter mood swings and unlock true corporate readiness.',
    },
  ],
};

// --- 2. WHAT WE CAN DO DATA ---
export const WHAT_WE_CAN_DO_DATA = [
  {
    id: 'wwcd-1',
    category: '1-on-1 Simulations',
    title: 'High-Fidelity Corporate Mock Interviews',
    subtitle: '45 to 90-minute live unscripted pressure rounds',
    description:
      'Simulate the exact interview rooms of FAANG, fintech unicorns, and enterprise giants with real engineers who grill on unscripted problem variants, code optimization, and live stress testing.',
    stats: '60-90 Min Live Session',
    highlights: [
      'Unscripted problem variants (No memorized LeetCode clones)',
      'Live code execution, unit testing, and edge-case probing',
      'Architectural whiteboarding & system design trade-offs',
      'Immediate 15-minute live verbal debrief after the round',
    ],
  },
  {
    id: 'wwcd-2',
    category: 'Diagnostic Telemetry',
    title: '360° Corporate Diagnostic Scorecards',
    subtitle: '10-parameter quantitative evaluation matrix',
    description:
      'Within 2 hours of the mock, receive an institutional-grade evaluation report covering Big-O efficiency, code readability, error handling, system scalability, and STAR communication.',
    stats: '2-Hour Turnaround',
    highlights: [
      'Standardized corporate readiness score (0-100)',
      'Benchmark percentiles vs 18,500+ past corporate candidates',
      'Timestamped video bookmarks linking directly to mistakes',
      'Prioritized 14-day study remediation plan with curated resources',
    ],
  },
  {
    id: 'wwcd-3',
    category: 'Institutional Audits',
    title: 'College Campus Batch Readiness Drives',
    subtitle: 'Bulk cohort mock audits for placement departments',
    description:
      'We take over the operational burden of conducting 1-on-1 mocks for 50 to 1,000+ students. Placement directors receive live dashboards identifying corporate-ready talent vs high-risk candidates.',
    stats: 'Up to 1,000+ Students/Batch',
    highlights: [
      'Zero trainer exhaustion; turnkey scheduling and execution',
      'Batch-wide skill gap heatmaps (DSA, System Design, Soft Skills)',
      'Corporate Shortlist Badging for top percentile performers',
      'Comprehensive batch intelligence export for visiting recruiters',
    ],
  },
  {
    id: 'wwcd-4',
    category: 'Portfolio & Code Roast',
    title: 'Resume & GitHub Production-Grade Roasts',
    subtitle: 'Corporate engineering manager critique',
    description:
      'Most resumes are disqualified within 6 seconds by ATS and hiring managers. Our engineering managers roast your resume and GitHub repositories to convert them into irresistible recruiter magnets.',
    stats: 'Top 5% Resume Tier',
    highlights: [
      'Bullet-point metric restructuring (X-Y-Z formula)',
      'GitHub repository clean-up & production architecture check',
      'Elimination of generic tutorial projects (To-Do apps, clones)',
      'Direct alignment with target corporate job descriptions',
    ],
  },
  {
    id: 'wwcd-5',
    category: 'Behavioral Calibration',
    title: 'STAR Behavioral & Culture Fit Calibration',
    subtitle: 'Eliminate soft-skill rejections in Round 2 & HR rounds',
    description:
      'Over 60% of technically sound candidates are rejected due to poor storytelling or failure to articulate business impact. We drill candidates using Amazon Leadership Principles and Fortune 500 standards.',
    stats: 'Amazon LP & Fortune 500 Bar',
    highlights: [
      'STAR (Situation, Task, Action, Result) answer structuring',
      'Executive presence, vocal pace, and filler-word reduction',
      'Handling tricky behavioral questions, gaps, and past failures',
      'Corporate compensation and offer negotiation etiquette',
    ],
  },
  {
    id: 'wwcd-6',
    category: 'Readiness Certification',
    title: 'Verifiable Corporate Competency Badges',
    subtitle: 'Fast-track screening passes with 420+ hiring partners',
    description:
      'Candidates scoring in the top quartile receive cryptographic CandiDev Corporate Ready Badges. Partner recruiters use these to waive Round 1 screening and invite candidates straight to final rounds.',
    stats: '420+ Hiring Networks',
    highlights: [
      'Cryptographically verified digital credential with public URL',
      'Direct link to sanitized interview scorecard & code sample',
      '3.4x higher shortlist rate with tech recruiters on LinkedIn',
      'Preferred candidate pool for campus visiting tech companies',
    ],
  },
];

// --- 3. WHAT KIND OF MOCKS WE CAN TAKE DATA ---
export interface MockTrack {
  id: string;
  name: string;
  category: 'Coding & Algorithms' | 'Architecture & Systems' | 'Specialized Engineering' | 'Behavioral & Leadership';
  duration: string;
  targetRoles: string[];
  difficulty: 'Junior Corporate (0-2 Yrs)' | 'Mid-Level SDE (2-5 Yrs)' | 'Senior Bar (5+ Yrs)';
  overview: string;
  coreTopics: string[];
  sampleQuestion: string;
  rubricFocus: string[];
  popularBadge?: string;
}

export const MOCK_TYPES_DATA: MockTrack[] = [
  {
    id: 'mock-dsa',
    name: 'DSA & Algorithmic Problem Solving',
    category: 'Coding & Algorithms',
    duration: '60 Mins',
    targetRoles: ['SDE-1', 'Junior Developer', 'Software Engineer', 'Graduate Trainee'],
    difficulty: 'Junior Corporate (0-2 Yrs)',
    popularBadge: 'Most Booked',
    overview:
      'The foundational filter for Google, Microsoft, Amazon, and tech startups. Tests real-time algorithm synthesis, asymptotic Big-O optimization, and clean bug-free implementation under psychological pressure.',
    coreTopics: [
      'Sliding Window & Two Pointers',
      'Dynamic Programming & Memoization',
      'Graph Traversal (BFS, DFS, Dijkstra)',
      'Monotonic Stacks & Deques',
      'Trees, Binary Search & Bit Manipulation',
    ],
    sampleQuestion:
      'Given a stream of real-time server latencies, design a sliding window maximum anomaly detector with strict O(1) amortized updates and sub-millisecond query time.',
    rubricFocus: ['Optimal Big-O Analysis', 'Vocal Problem Framing', 'Edge-Case Vigilance', 'Code Cleanliness & Modularization'],
  },
  {
    id: 'mock-hld',
    name: 'High-Level System Design (HLD)',
    category: 'Architecture & Systems',
    duration: '75 Mins',
    targetRoles: ['SDE-2', 'Backend Engineer', 'Solutions Architect', 'Full Stack Lead'],
    difficulty: 'Mid-Level SDE (2-5 Yrs)',
    popularBadge: 'High CTC Booster',
    overview:
      'Essential for securing top-tier 15+ LPA corporate roles. Tests your ability to architect scalable, resilient, fault-tolerant distributed systems from requirements to capacity estimation.',
    coreTopics: [
      'Microservices & API Gateway Design',
      'Database Sharding, Replication & CAP Theorem',
      'Distributed Caching (Redis, Memcached)',
      'Message Queues & Streaming (Kafka, RabbitMQ)',
      'Rate Limiting, CDN & Load Balancing',
    ],
    sampleQuestion:
      'Design a global distributed ride-matching engine like Uber capable of handling 500,000 concurrent driver telemetry pings per second with sub-50ms geolocation queries.',
    rubricFocus: ['Scale & Bottleneck Identification', 'Data Model & Schema Scalability', 'Trade-off Articulation', 'Fault Tolerance & Disaster Recovery'],
  },
  {
    id: 'mock-lld',
    name: 'Low-Level Design & Machine Coding (LLD)',
    category: 'Architecture & Systems',
    duration: '90 Mins',
    targetRoles: ['SDE-1 / SDE-2', 'Java/C++ Engineer', 'Fintech Developer', 'System Architect'],
    difficulty: 'Mid-Level SDE (2-5 Yrs)',
    overview:
      'The favorite round of top Indian tech startups (Swiggy, Flipkart, PhonePe, Razorpay). You are given a business scenario and must build modular, extensible, clean object-oriented code in 90 minutes.',
    coreTopics: [
      'SOLID Design Principles & Clean Architecture',
      'Creational, Structural & Behavioral Patterns (Factory, Strategy, Observer, State)',
      'Thread Safety, Concurrency & Synchronization',
      'Extensible Domain Modeling & Unit Testing',
    ],
    sampleQuestion:
      'Design and code a fully functional Concurrent In-Memory Cache with LRU/LFU eviction policies, TTL expiry, and multi-threaded read/write thread-safety.',
    rubricFocus: ['Extensibility & Modularity', 'Design Pattern Application', 'Thread Safety & Synchronization', 'Working Testable Implementation'],
  },
  {
    id: 'mock-fullstack',
    name: 'Full Stack Web Engineering (MERN / Next.js)',
    category: 'Specialized Engineering',
    duration: '75 Mins',
    targetRoles: ['Full Stack Engineer', 'MERN Developer', 'Web App Architect', 'Frontend/Backend Hybrid'],
    difficulty: 'Junior Corporate (0-2 Yrs)',
    popularBadge: 'Top Campus Demand',
    overview:
      'End-to-end evaluation covering client-side performance, state management, REST/GraphQL contracts, database modeling, and server-side rendering architecture.',
    coreTopics: [
      'Next.js App Router, SSR, SSG & Server Actions',
      'React 19 State Architecture, Hooks & Re-render Tuning',
      'RESTful & GraphQL API Contract Design',
      'PostgreSQL / MongoDB Schema Design & Indexing',
      'Authentication (JWT, OAuth2, Session Security)',
    ],
    sampleQuestion:
      'Build a live collaborative kanban dashboard with optimistic UI updates, WebSocket syncing, database race-condition prevention, and responsive CSS layout.',
    rubricFocus: ['Component Lifecycle & State Elegance', 'API Contract Robustness', 'Security & Input Sanitization', 'DOM & Core Web Vitals Optimization'],
  },
  {
    id: 'mock-backend',
    name: 'Backend & Cloud Microservices (Java/Go/Python)',
    category: 'Specialized Engineering',
    duration: '60 Mins',
    targetRoles: ['Backend SDE', 'Java Spring Engineer', 'Golang Developer', 'Cloud Platform Engineer'],
    difficulty: 'Mid-Level SDE (2-5 Yrs)',
    overview:
      'Deep dive into enterprise server architecture, asynchronous processing, database connection pooling, query optimization, and resilient API microservices.',
    coreTopics: [
      'Java Spring Boot / Golang Gin / Python FastAPI',
      'SQL Query Optimization & Database Index Tuning',
      'Connection Pools, Transactions & ACID Guarantees',
      'Asynchronous Event-Driven Architecture (Kafka)',
      'gRPC, REST, Circuit Breakers & Retries',
    ],
    sampleQuestion:
      'Debug a payment webhook processor suffering from deadlocks under 10,000 req/sec spikes; refactor database transactions and introduce idempotent consumer handling.',
    rubricFocus: ['Concurrency & Locking Discipline', 'SQL Query Execution Plans', 'Error Handling & Resilience', 'Memory Footprint & Garbage Collection'],
  },
  {
    id: 'mock-frontend',
    name: 'Frontend Engineering & Web Performance',
    category: 'Specialized Engineering',
    duration: '60 Mins',
    targetRoles: ['Frontend Engineer', 'UI/UX Developer', 'React Specialist', 'Mobile/Web Engineer'],
    difficulty: 'Junior Corporate (0-2 Yrs)',
    overview:
      'Rigorous testing of JavaScript engine fundamentals (Event Loop, Closures, Prototypes), browser rendering engines, state management, accessibility, and Core Web Vitals.',
    coreTopics: [
      'Deep JS Internals (Event Loop, Microtasks, Memory Leaks)',
      'Virtual DOM vs Shadow DOM vs Incremental Hydration',
      'Core Web Vitals (LCP, INP, CLS) optimization',
      'Custom Hooks, State Machines & Context Pitfalls',
      'Accessible & Responsive CSS Architecture',
    ],
    sampleQuestion:
      'Implement an accessible, zero-dependency Virtualized Infinite Scroll component that smoothly renders 100,000 complex DOM rows at 60 FPS without memory bloat.',
    rubricFocus: ['DOM Virtualization & Rendering Perf', 'JS Runtime Understanding', 'Accessible HTML & Keyboard Nav', 'Clean State Modularization'],
  },
  {
    id: 'mock-devops',
    name: 'DevOps, Cloud & Site Reliability (SRE)',
    category: 'Specialized Engineering',
    duration: '60 Mins',
    targetRoles: ['DevOps Engineer', 'Cloud Architect', 'SRE', 'Infrastructure Engineer'],
    difficulty: 'Mid-Level SDE (2-5 Yrs)',
    overview:
      'Testing real-world infrastructure orchestration, containerization, CI/CD pipeline automation, zero-downtime deployment strategies, and telemetry monitoring.',
    coreTopics: [
      'Docker Multistage Builds & Image Hardening',
      'Kubernetes Deployments, Ingress & Helm Charts',
      'CI/CD Pipelines (GitHub Actions, GitLab CI)',
      'Infrastructure as Code (Terraform, AWS/GCP)',
      'Prometheus, Grafana & Distributed Tracing',
    ],
    sampleQuestion:
      'Write a hardened Kubernetes deployment with blue-green rolling updates, horizontal pod autoscaling based on custom metrics, and strict security context policies.',
    rubricFocus: ['Infrastructure Security Best Practices', 'Pipeline Idempotency & Speed', 'Zero-Downtime Rollout Strategy', 'Observability & Alerting Setup'],
  },
  {
    id: 'mock-behavioral',
    name: 'Corporate Behavioral & STAR Leadership',
    category: 'Behavioral & Leadership',
    duration: '45 Mins',
    targetRoles: ['All Roles', 'Campus Placements', 'Lateral Hires', 'Team Leads'],
    difficulty: 'Junior Corporate (0-2 Yrs)',
    popularBadge: 'Essential For All',
    overview:
      'Simulate the high-stakes Director/VP and HR rounds. Master the STAR methodology, demonstrate high ownership, explain past failures with humility, and showcase culture fit.',
    coreTopics: [
      'STAR Framework (Situation, Task, Action, Result)',
      'Amazon 16 Leadership Principles & Google Googliness',
      'Resolving Technical Conflicts with Peers & Managers',
      'Handling Ambiguity, Deadline Pressure & Mistakes',
      'Confidence, Vocal Clarity & Body Language',
    ],
    sampleQuestion:
      'Tell me about a time you strongly disagreed with an architectural decision made by a senior engineer. How did you push back constructively, and what was the outcome?',
    rubricFocus: ['Structured STAR Storytelling', 'Self-Awareness & Ownership', 'Conciseness & Metric Articulation', 'Executive Poise & Professional Presence'],
  },
];

// --- 4. HOW MANY FOUND OUR SERVICES HELPFUL (IMPACT & STATS) ---
export const IMPACT_METRICS = {
  headlineStats: [
    { number: '18,500+', label: 'Candidates Evaluated', sub: 'Across 12+ technical disciplines' },
    { number: '94.8%', label: 'Placement Offer Rate', sub: 'Secured offers within 90 days of mock' },
    { number: '3.4x', label: 'Average CTC Increase', sub: 'From 4.5 LPA to 15.2 LPA benchmark' },
    { number: '4.9/5.0', label: 'Student Satisfaction', sub: 'Over 12,400+ verified ratings' },
    { number: '85+', label: 'Tied-Up Colleges', sub: 'Leading engineering institutes nationwide' },
    { number: '420+', label: 'Hiring Companies', sub: 'Trusting CandiDev verified scorecards' },
  ],
  verifiedStudentSuccessStories: [
    {
      id: 'ss-1',
      name: 'Rohan Sharma',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
      college: 'VIT Vellore (Batch of 2025)',
      placedCompany: 'Google India',
      role: 'Software Engineer (L3)',
      package: '32 LPA CTC',
      track: 'DSA & High-Level System Design',
      initialScore: 58,
      finalScore: 94,
      quote:
        'I had failed two campus interview drives because I used to jump straight into code without talking through Big-O trade-offs. My CandiDev interviewer drilled me on vocalizing thoughts. The 14-day action plan fixed my dynamic programming weak spots. Cleared Google Round 1 and Round 2 with flying colors!',
    },
    {
      id: 'ss-2',
      name: 'Ananya Deshpande',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
      college: 'RV College of Engineering (RVCE)',
      placedCompany: 'Microsoft',
      role: 'SDE-1 (Azure Cloud)',
      package: '28 LPA CTC',
      track: 'Full Stack & Cloud Architecture',
      initialScore: 62,
      finalScore: 91,
      quote:
        'The unscripted system design mock with a Microsoft Staff Engineer was an absolute eye-opener. He pointed out concurrency bottlenecks in my distributed cache that no college professor ever mentioned. The CandiDev diagnostic report was worth 100 textbooks.',
    },
    {
      id: 'ss-3',
      name: 'Vikramaditya Verma',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      college: 'NIT Trichy',
      placedCompany: 'Amazon',
      role: 'SDE-1 (AWS)',
      package: '31 LPA CTC',
      track: 'DSA & Behavioral (Amazon LPs)',
      initialScore: 54,
      finalScore: 93,
      quote:
        'Amazon’s behavioral rounds are notorious for failing people who can code. My mentor at CandiDev transformed my rambling answers into sharp, structured STAR bullets with concrete metrics. When the Amazon bar-raiser asked for leadership examples, I felt 100% in control.',
    },
    {
      id: 'ss-4',
      name: 'Meera Nambiar',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      college: 'SRM Institute of Science & Technology',
      placedCompany: 'Atlassian',
      role: 'Frontend Engineer',
      package: '26 LPA CTC',
      track: 'Frontend & Web Vitals',
      initialScore: 65,
      finalScore: 95,
      quote:
        'The live coding simulator was identical to Atlassian’s pairing round. I was asked to build a virtualized data table while defending re-render cycles live. Having experienced that exact pressure twice in CandiDev mocks gave me effortless calm on the actual interview day.',
    },
  ],
  outcomesComparison: [
    { metric: 'First-Round Campus Clearance Rate', withoutCandiDev: '26%', withCandiDev: '88%', delta: '+62%' },
    { metric: 'Avg Placement Cycle Duration', withoutCandiDev: '120 Days', withCandiDev: '28 Days', delta: '4.2x Faster' },
    { metric: 'Placement Rejection Due to Soft Skills', withoutCandiDev: '58%', withCandiDev: '8%', delta: '-50% Deficit' },
    { metric: 'Tier-1 High-CTC Offer Conversion', withoutCandiDev: '12%', withCandiDev: '46%', delta: '3.8x Jump' },
  ],
};

// --- 5. WHICH COLLEGES TIED UP WITH US ---
export interface TiedUpCollege {
  id: string;
  name: string;
  shortName: string;
  category: 'Tier-1 University' | 'Premier Tech Institute' | 'Top Private University' | 'Flagship Academy';
  location: string;
  studentsTrained: number;
  avgCtcBoost: string;
  placementRate: string;
  mouYear: string;
  badge: string;
  deanEndorsement: string;
  deanName: string;
  deanTitle: string;
}

export const COLLEGES_TIED_UP: TiedUpCollege[] = [
  {
    id: 'col-1',
    name: 'Birla Institute of Technology and Science, Pilani (BITS Pilani)',
    shortName: 'BITS Pilani',
    category: 'Tier-1 University',
    location: 'Pilani, Rajasthan & Goa Campus',
    studentsTrained: 850,
    avgCtcBoost: '3.6x',
    placementRate: '96.2%',
    mouYear: 'Partner Since 2024',
    badge: 'Premier Campus Partner',
    deanEndorsement:
      'CandiDev solved our biggest operational headache: conducting authentic, unscripted technical mocks for hundreds of students without exhausting our faculty. Their 10-point rubrics reflect genuine corporate hiring bars.',
    deanName: 'Prof. Alok Mukherjee',
    deanTitle: 'Head of Industry Relations & Placement Office',
  },
  {
    id: 'col-2',
    name: 'Indian Institute of Technology (IIT Bombay - Tech Council)',
    shortName: 'IIT Bombay Tech Council',
    category: 'Tier-1 University',
    location: 'Powai, Mumbai',
    studentsTrained: 420,
    avgCtcBoost: '2.8x',
    placementRate: '98.4%',
    mouYear: 'Partner Since 2024',
    badge: 'Exclusive Tech Partner',
    deanEndorsement:
      'Even IIT students face difficulty when explaining low-level design trade-offs in 45-minute corporate rounds. CandiDev mentors provided the exact corporate mirror our students needed to ace top US tech offers.',
    deanName: 'Sanjay Deshpande',
    deanTitle: 'Convener, Student Placement Support Cell',
  },
  {
    id: 'col-3',
    name: 'National Institute of Technology, Tiruchirappalli (NIT Trichy)',
    shortName: 'NIT Trichy',
    category: 'Premier Tech Institute',
    location: 'Tiruchirappalli, Tamil Nadu',
    studentsTrained: 610,
    avgCtcBoost: '3.2x',
    placementRate: '92.5%',
    mouYear: 'Partner Since 2024',
    badge: 'National Institute MoU',
    deanEndorsement:
      'The cohort intelligence dashboard gave our department clear visibility on which students were struggling with dynamic programming and system design before the Day-1 campus companies arrived.',
    deanName: 'Dr. K. S. Balasubramanian',
    deanTitle: 'Director of Training & Placement',
  },
  {
    id: 'col-4',
    name: 'Vellore Institute of Technology (VIT Vellore)',
    shortName: 'VIT Vellore',
    category: 'Top Private University',
    location: 'Vellore, Tamil Nadu',
    studentsTrained: 1450,
    avgCtcBoost: '3.4x',
    placementRate: '91.8%',
    mouYear: 'Partner Since 2024',
    badge: 'Large Cohort Partner',
    deanEndorsement:
      'Managing mocks for over 1,000 engineering students was a logistical nightmare. CandiDev onboarded our entire cohort seamlessly. Our placement conversion surged by 38% this past placement cycle.',
    deanName: 'Dr. V. Samuel Raj',
    deanTitle: 'Dean, Career Development Centre (CDC)',
  },
  {
    id: 'col-5',
    name: 'Rashtreeya Vidyalaya College of Engineering (RVCE)',
    shortName: 'RVCE Bangalore',
    category: 'Premier Tech Institute',
    location: 'Bengaluru, Karnataka',
    studentsTrained: 530,
    avgCtcBoost: '3.1x',
    placementRate: '94.1%',
    mouYear: 'Partner Since 2025',
    badge: 'Tech Hub Partner',
    deanEndorsement:
      'Being in the heart of Bangalore, our recruiters expect immediate corporate productivity. CandiDev trained our batch to think like production engineers rather than textbook memorizers.',
    deanName: 'Prof. K. Venkatesh',
    deanTitle: 'Chief Placement Officer',
  },
  {
    id: 'col-6',
    name: 'SRM Institute of Science and Technology',
    shortName: 'SRM University',
    category: 'Top Private University',
    location: 'Kattankulathur, Chennai',
    studentsTrained: 980,
    avgCtcBoost: '2.9x',
    placementRate: '89.6%',
    mouYear: 'Partner Since 2025',
    badge: 'Comprehensive MoU',
    deanEndorsement:
      'The STAR behavioral drills were a total game-changer. Our students usually had strong technical skills but faltered in managerial rounds. CandiDev fixed their articulation completely.',
    deanName: 'Dr. Anupama Venkat',
    deanTitle: 'Head, Placement Alliances & Career Guidance',
  },
  {
    id: 'col-7',
    name: 'Delhi Technological University (DTU - Formerly DCE)',
    shortName: 'DTU Delhi',
    category: 'Tier-1 University',
    location: 'Shahbad Daulatpur, Delhi',
    studentsTrained: 490,
    avgCtcBoost: '3.0x',
    placementRate: '93.7%',
    mouYear: 'Partner Since 2025',
    badge: 'Elite Partner',
    deanEndorsement:
      'CandiDev provides an uncompromising corporate standard. Their interviewers are ruthless with time limits and Big-O efficiency, exactly as candidates experience at Google, Uber, and Cisco.',
    deanName: 'Prof. R. C. Sharma',
    deanTitle: 'Head of Placements & Corporate Liaison',
  },
  {
    id: 'col-8',
    name: 'Thapar Institute of Engineering and Technology',
    shortName: 'Thapar University',
    category: 'Premier Tech Institute',
    location: 'Patiala, Punjab',
    studentsTrained: 380,
    avgCtcBoost: '3.3x',
    placementRate: '91.2%',
    mouYear: 'Partner Since 2025',
    badge: 'Regional Champion',
    deanEndorsement:
      'The individual 4-page diagnostic report each student receives after their mock interview gives our mentors a clear remediation blueprint. It eliminated guesswork from our final prep sprint.',
    deanName: 'Dr. Manjit Singh',
    deanTitle: 'Director of Corporate Alliances',
  },
  {
    id: 'col-9',
    name: 'CodeSprint Academy & FullStackForge',
    shortName: 'CodeSprint Academy',
    category: 'Flagship Academy',
    location: 'Bengaluru & Hyderabad',
    studentsTrained: 320,
    avgCtcBoost: '4.1x',
    placementRate: '95.0%',
    mouYear: 'Partner Since 2024',
    badge: 'Bootcamp Pioneer',
    deanEndorsement:
      'As a high-intensity coding bootcamp, we guarantee placement. CandiDev is our external quality assurance division. No student graduates to our hiring partners without a CandiDev badge.',
    deanName: 'Sameer Qureshi',
    deanTitle: 'Founder & Academic Director',
  },
  {
    id: 'col-10',
    name: 'PES University Bangalore',
    shortName: 'PES University',
    category: 'Top Private University',
    location: 'Ring Road Campus, Bengaluru',
    studentsTrained: 640,
    avgCtcBoost: '3.2x',
    placementRate: '93.3%',
    mouYear: 'Partner Since 2025',
    badge: 'Strategic Hub',
    deanEndorsement:
      'Our students landed 40+ Super Dream offers (>20 LPA) this season after completing the CandiDev High-Level System Design and Machine Coding tracks.',
    deanName: 'Prof. Divya Hegde',
    deanTitle: 'Chairperson, Placements & Internships',
  },
];

// --- 6. WHAT KIND OF FLOW WE FOLLOW (WORKFLOW PROCESS) ---
export interface WorkflowStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  durationBadge: string;
  deliverables: string[];
  keyHighlight: string;
}

export const STUDENT_FLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: 'Diagnostic Intake & Calibration',
    subtitle: 'Define target role, dream companies & baseline',
    description:
      'Candidate selects their target track (DSA, System Design, Fullstack, Behavioral) and uploads their resume along with target company caliber (e.g. FAANG, Tier-1 Product, FinTech Unicorn).',
    iconName: 'FileCheck',
    durationBadge: 'Day 0 • 10 Mins',
    deliverables: [
      'Target company rubric calibration',
      'Resume & project parsing for custom drill scenarios',
      'Personalized session briefing sheet',
    ],
    keyHighlight: 'We tailor the problem set to your exact dream company’s real interview question archives.',
  },
  {
    stepNumber: 2,
    title: 'Smart Mentor Matching',
    subtitle: 'Paired with an active Tier-1 corporate engineer',
    description:
      'Our algorithm pairs you with a senior engineer or hiring manager currently working at your target tier (e.g., L5 at Google, SDE-2 at Microsoft, Staff Architect at Amazon) with domain specialization.',
    iconName: 'Users',
    durationBadge: 'Instant • Automated',
    deliverables: [
      'Interviewer verified profile & background card',
      'Calendar slot confirmation with instant calendar invite',
      'Private cloud coding sandbox room link',
    ],
    keyHighlight: 'You are never interviewed by a generic tutor or peer; only active corporate practitioners.',
  },
  {
    stepNumber: 3,
    title: 'High-Fidelity Live Corporate Simulation',
    subtitle: '45-90 minutes of unscripted real-world pressure',
    description:
      'Enter a live video & code environment. Face unscripted problem variants, live dry-running drills, stress testing, and architectural whiteboarding under strict corporate time constraints.',
    iconName: 'Terminal',
    durationBadge: 'Day 1 • 60-90 Mins',
    deliverables: [
      'Live code execution & automated test runner',
      'Real-time interviewer interaction & live hints test',
      '15-minute immediate verbal debrief directly after coding',
    ],
    keyHighlight: 'Experience the real psychological pressure before your actual dream company interview day.',
  },
  {
    stepNumber: 4,
    title: '360° Diagnostic Scorecard & Replay',
    subtitle: 'Quantitative 10-parameter corporate evaluation',
    description:
      'Within 2 hours of session completion, receive your comprehensive diagnostic scorecard with benchmark percentiles, timestamped video commentary, and pass/fail hiring committee verdict.',
    iconName: 'BarChart3',
    durationBadge: 'Within 2 Hours',
    deliverables: [
      'Corporate Readiness Index (0 - 100)',
      '10-metric breakdown (Big-O, Code Cleanliness, STAR, Error recovery)',
      'Full session recording with mentor commentary bookmarks',
    ],
    keyHighlight: 'Never wonder why you failed; see the exact moment and reason documented with clear evidence.',
  },
  {
    stepNumber: 5,
    title: 'Personalized 14-Day Remediation Plan',
    subtitle: 'Curated blueprint to fix identified weak spots',
    description:
      'Your report includes a laser-focused, day-by-day action roadmap targeting your specific failure points—whether it is dynamic programming memoization, distributed cache race conditions, or STAR brevity.',
    iconName: 'Compass',
    durationBadge: 'Days 2-15 • Self-Paced',
    deliverables: [
      'Day-by-day practice problem sets with similar constraints',
      'Recommended architectural reading & trade-off cheat sheets',
      'Post-mock mentor Q&A message support',
    ],
    keyHighlight: 'Turn your weaknesses into strengths before your next interview round.',
  },
  {
    stepNumber: 6,
    title: 'Certification & Placement Referral',
    subtitle: 'Verified corporate badge & recruiter fast-track',
    description:
      'Upon passing the CandiDev Corporate Threshold, receive a cryptographically verified Digital Competency Badge. Top percentile candidates are directly recommended to our 420+ hiring partners.',
    iconName: 'Award',
    durationBadge: 'Permanent Credential',
    deliverables: [
      'Verifiable CandiDev Corporate Readiness Certificate',
      'Shareable public verification link for LinkedIn & Resume',
      'Direct interview pass consideration with hiring partners',
    ],
    keyHighlight: 'Prove to recruiters that you have cleared the corporate bar prior to their first screening call.',
  },
];

export const COLLEGE_FLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: 'Cohort Onboarding & Syllabus Alignment',
    subtitle: 'MoU finalization & batch roster intake',
    description:
      'Placement head uploads the batch roster (15 to 1,000+ students) and selects the required technical tracks aligned with upcoming campus company visiting dates.',
    iconName: 'Building',
    durationBadge: '48 Hours Setup',
    deliverables: ['Custom college subdomain / booking link', 'Roster upload & student self-scheduling portal', 'Institute Coordinator dashboard credentials'],
    keyHighlight: 'Zero manual timetable work for college faculty; our automated scheduler handles all student slots.',
  },
  {
    stepNumber: 2,
    title: 'Interviewer Fleet Deployment',
    subtitle: '250+ vetted corporate engineers assigned',
    description:
      'We mobilize our vetted pool of corporate software leads from FAANG and product companies, matching each student batch with specialists in their exact chosen engineering discipline.',
    iconName: 'Users',
    durationBadge: 'Seamless Scheduling',
    deliverables: ['Automated student reminders via WhatsApp & Email', 'Slot reallocation & emergency makeup slot buffers', 'Attendance & no-show tracking telemetry'],
    keyHighlight: 'Save 100+ hours of faculty trainer burnout; CandiDev handles 100% of the mock logistics.',
  },
  {
    stepNumber: 3,
    title: 'Batch Mock Execution Window',
    subtitle: 'High-volume standardized corporate rounds',
    description:
      'Students complete their 1-on-1 simulations over the designated 3 to 7-day campus window on our secure browser-based assessment platform.',
    iconName: 'Terminal',
    durationBadge: 'Campus Window (3-7 Days)',
    deliverables: ['Live monitoring of batch interview progression', 'Standardized grading across all students without faculty bias', 'Real-time test session logs and video backups'],
    keyHighlight: 'Every single student is evaluated against the identical corporate bar, removing classroom favoritism.',
  },
  {
    stepNumber: 4,
    title: 'Instant Cohort Intelligence Dashboard',
    subtitle: 'Placement director macro view & skill heatmaps',
    description:
      'Within 24 hours of batch completion, the Dean of Placements gains complete macro and micro visibility into the batch readiness distribution and corporate drive readiness.',
    iconName: 'BarChart3',
    durationBadge: 'Within 24 Hours',
    deliverables: ['Batch readiness curve (% Corporate Ready vs Needs Polish vs At Risk)', 'Department-level skill gap heatmaps (DSA, Architecture, Communication)', 'Individual downloadable 4-page student scorecards'],
    keyHighlight: 'Know exactly which students will clear Day-1 campus drives and which need emergency intervention.',
  },
  {
    stepNumber: 5,
    title: 'Faculty Remediation Debrief',
    subtitle: 'Targeted curriculum adjustment briefing',
    description:
      'Our lead evaluation architect conducts a 60-minute briefing with institute professors and trainers, detailing exact curriculum gaps observed during the mock drive.',
    iconName: 'FileCheck',
    durationBadge: 'Post-Drive Strategy',
    deliverables: ['Comprehensive Batch Diagnostic Executive Summary PDF', 'List of high-frequency failure patterns observed', 'Curriculum tuning recommendations for upcoming batches'],
    keyHighlight: 'Bridge the syllabus-to-corporate gap with hard data from 250+ active industry interviewers.',
  },
  {
    stepNumber: 6,
    title: 'Corporate Placement Drive Acceleration',
    subtitle: 'Present verified candidate lists to visiting recruiters',
    description:
      'Equip your placement cell with verified CandiDev corporate readiness scorecards. Visiting tech companies use our scores to bypass initial resume screenings, drastically boosting offers.',
    iconName: 'Award',
    durationBadge: 'Campus Placement Season',
    deliverables: ['One-click corporate-ready student roster export for recruiters', 'Verified CandiDev badges for top 25% students', 'Direct corporate hiring partner referral introductions'],
    keyHighlight: 'Institutes report an average 35% to 60% increase in final campus placement offers.',
  },
];

// --- 7. CONNECT THROUGH THESE CHANNELS DATA ---
export const CONNECT_CHANNELS_DATA = [
  {
    id: 'whatsapp',
    channel: 'WhatsApp Instant Chat',
    name: 'Quick Admissions & Support Hotline',
    detail: '+91 98765 43210',
    description: 'Chat directly with our senior student advisor for immediate slot booking, mock track counseling, or batch pilot setup.',
    actionLabel: 'Chat on WhatsApp',
    actionUrl: 'https://wa.me/919876543210?text=Hello%20CandiDev!%20I%20would%20like%20to%20learn%20more%20about%20booking%20a%20corporate%20mock%20session.',
    color: '#25D366',
    bgColor: '#e8f9ee',
    borderColor: '#a3e8b7',
    badge: 'Fastest Response (< 5 Mins)',
  },
  {
    id: 'discord',
    channel: 'Discord Developer Community',
    name: 'CandiDev Tech Hangout (25K+ Devs)',
    detail: 'discord.gg/candidev',
    description: 'Join our vibrant developer community. Participate in weekly system design whiteboards, daily LeetCode discussions, and live resume roast events.',
    actionLabel: 'Join Discord Server',
    actionUrl: 'https://discord.gg/candidev',
    color: '#5865F2',
    bgColor: '#eef0fd',
    borderColor: '#bac1fa',
    badge: 'Active Tech Community',
  },
  {
    id: 'linkedin',
    channel: 'LinkedIn Official Page',
    name: 'CandiDev Corporate Network',
    detail: 'linkedin.com/company/candidev',
    description: 'Connect with our network of 250+ FAANG mentors, hiring partners, placement announcements, and corporate hiring drive updates.',
    actionLabel: 'Follow on LinkedIn',
    actionUrl: 'https://linkedin.com/company/candidev',
    color: '#0A66C2',
    bgColor: '#edf5fd',
    borderColor: '#bad7f8',
    badge: 'Corporate Network',
  },
  {
    id: 'telegram',
    channel: 'Telegram Broadcast Channel',
    name: 'CandiDev Placement & DSA Radar',
    detail: '@candidev_prep',
    description: 'Daily curated interview problem of the day, company hiring drive alerts, interview cheat sheets, and salary negotiation strategies.',
    actionLabel: 'Join Telegram Channel',
    actionUrl: 'https://t.me/candidev_prep',
    color: '#229ED9',
    bgColor: '#eaf6fc',
    borderColor: '#b2e2f6',
    badge: 'Daily Problem & Job Alerts',
  },
  {
    id: 'email-students',
    channel: 'Direct Student Email Desk',
    name: 'Candidate Support & Inquiries',
    detail: 'students@candidev.com',
    description: 'Questions regarding mock scheduling, scorecard clarification, mentor re-matching, or personalized prep counseling.',
    actionLabel: 'Email Students Desk',
    actionUrl: 'mailto:students@candidev.com?subject=Inquiry%20Regarding%20CandiDev%20Mock%20Interviews',
    color: 'var(--burgundy-accent)',
    bgColor: 'var(--burgundy-soft)',
    borderColor: 'var(--burgundy-border)',
    badge: 'Reply Within 2 Hours',
  },
  {
    id: 'email-college',
    channel: 'College & University MoU Desk',
    name: 'Institutional Alliances & Deans',
    detail: 'placements@candidev.com',
    description: 'For Deans, HODs, and Placement Officers requesting campus pilot batches, customized evaluation rubrics, or institutional MoUs.',
    actionLabel: 'Email Placement Cell',
    actionUrl: 'mailto:placements@candidev.com?subject=Institutional%20Partnership%20and%20Campus%20Drive%20Inquiry',
    color: 'var(--burgundy-accent)',
    bgColor: 'var(--burgundy-soft)',
    borderColor: 'var(--burgundy-border)',
    badge: 'Dedicated MoU Manager',
  },
];

