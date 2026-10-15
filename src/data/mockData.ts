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
