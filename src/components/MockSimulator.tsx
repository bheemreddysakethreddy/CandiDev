'use client';

import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  Clock,
  Send,
  Award,
} from 'lucide-react';
import { SIMULATOR_QUESTIONS, Student } from '@/data/mockData';

interface MockSimulatorProps {
  onOpenScorecard: (student: Student) => void;
}

export default function MockSimulator({ onOpenScorecard }: MockSimulatorProps) {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState<'javascript' | 'python' | 'java'>('javascript');
  const [code, setCode] = useState('');
  const [isRunningTests, setIsRunningTests] = useState(false);
  const [testOutput, setTestOutput] = useState<string | null>(null);

  // Timer state
  const [secondsLeft, setSecondsLeft] = useState(45 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // Rubric Scores
  const [rubricScores, setRubricScores] = useState({
    algo: 23,
    edgeCases: 18,
    codeHygiene: 24,
    communication: 27,
  });

  // Timestamped Interviewer Notes
  const [notes, setNotes] = useState<Array<{ time: string; text: string; author: string }>>([
    {
      time: '04:15',
      text: 'Candidate clearly framed problem requirements and asked whether k could exceed array length.',
      author: 'Sarah Chen (Lead Interviewer)',
    },
    {
      time: '12:30',
      text: 'Identified that nested loop yields O(N*k) and pivoted immediately to Monotonic Deque for O(N).',
      author: 'Sarah Chen (Lead Interviewer)',
    },
    {
      time: '24:50',
      text: 'Clean variable naming. Dry-ran test case with negative values aloud before coding.',
      author: 'Sarah Chen (Lead Interviewer)',
    },
  ]);
  const [newNote, setNewNote] = useState('');

  const currentQuestion = SIMULATOR_QUESTIONS[selectedQuestionIndex];

  // Initialize code when language or question changes
  useEffect(() => {
    if (currentQuestion && currentQuestion.starterCode[selectedLanguage]) {
      setCode(currentQuestion.starterCode[selectedLanguage]);
    }
  }, [selectedQuestionIndex, selectedLanguage]);

  // Timer effect
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, secondsLeft]);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleRunTests = () => {
    setIsRunningTests(true);
    setTestOutput(null);

    setTimeout(() => {
      setIsRunningTests(false);
      setTestOutput(
        `✓ Test Case 1: nums=[1,3,-1,-3,5,3,6,7], k=3 -> Expected: [3,3,5,5,6,7], Got: [3,3,5,5,6,7] (2.1ms)\n✓ Test Case 2: nums=[1], k=1 -> Expected: [1], Got: [1] (0.8ms)\n✓ Test Case 3: nums=[9,11], k=2 -> Expected: [11], Got: [11] (0.9ms)\n\nCorporate Evaluation: All 3 Test Cases Passed. Memory: 42.1 MB. Time Complexity O(N) verified.`
      );
    }, 1200);
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    const timeStamp = `${Math.floor((45 * 60 - secondsLeft) / 60)
      .toString()
      .padStart(2, '0')}:${((45 * 60 - secondsLeft) % 60)
      .toString()
      .padStart(2, '0')}`;
    setNotes((prev) => [
      ...prev,
      {
        time: timeStamp,
        text: newNote.trim(),
        author: 'Interviewer Panel',
      },
    ]);
    setNewNote('');
  };

  const totalScore =
    rubricScores.algo +
    rubricScores.edgeCases +
    rubricScores.codeHygiene +
    rubricScores.communication;

  // Mock student to pass to Scorecard modal
  const simulatedStudent: Student = {
    id: 'sim-1',
    name: 'Aisha Khan',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    track: 'Full Stack MERN & Distributed Systems',
    readinessScore: totalScore,
    status: totalScore >= 85 ? 'Corporate Ready' : totalScore >= 70 ? 'Needs Polish' : 'At Risk',
    targetRole: 'SDE-1 / Junior Backend Engineer',
    interviewer: 'Sarah Chen (Senior Staff at CloudScale)',
    interviewDate: 'Live Session in Progress',
    metrics: {
      dsa: rubricScores.algo * 4,
      systemDesign: rubricScores.edgeCases * 5,
      codeQuality: rubricScores.codeHygiene * 4,
      communication: rubricScores.communication * 3.3,
      debugging: 94,
      behavioral: 92,
    },
    strengths: [
      'Identified O(N) Monotonic Deque formulation immediately',
      'Articulated boundary conditions aloud without hesitation',
      'Clean modular functions adhering to corporate production standards',
    ],
    growthAreas: [
      'Ensure memory overhead of double-ended queue is discussed upfront',
    ],
    interviewerSummary:
      'Candidate Aisha exhibits top 5% corporate readiness. Clear vocal reasoning, fast error detection, and high engineering poise.',
    actionPlan: [
      'Submit directly to Tier-1 product tech hiring drives',
      'Practice 2 advanced concurrent LRU cache problems',
    ],
  };

  return (
    <section id="simulator" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="pulse-live" />
            <span>Interactive Simulator</span>
          </div>
          <h2 className="section-title">Experience a CandiDev Corporate Mock</h2>
          <p className="section-desc">
            Explore our real-time mock interview environment. Watch the candidate video stream,
            test code execution, adjust live rubric parameters, and generate an instant corporate
            readiness scorecard.
          </p>
        </div>

        {/* Simulator Frame - Clean White Light Mode */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-medium)',
            boxShadow: 'var(--shadow-md)',
            overflow: 'hidden',
          }}
        >
          {/* Top Control Bar */}
          <div
            style={{
              padding: '0.9rem 1.5rem',
              background: '#fdfafb',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            {/* Left: Session Details */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="pulse-live" />
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--text-heading)',
                    letterSpacing: '0.04em',
                  }}
                >
                  LIVE SESSION #4829
                </span>
              </div>

              {/* Question Dropdown */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                  Problem:
                </span>
                <select
                  value={selectedQuestionIndex}
                  onChange={(e) => setSelectedQuestionIndex(Number(e.target.value))}
                  style={{
                    background: '#ffffff',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-primary)',
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {SIMULATOR_QUESTIONS.map((q, idx) => (
                    <option key={q.id} value={idx}>
                      {q.title} ({q.difficulty})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Right: Timer, Language & Scorecard CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {/* Language Selector */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                {(['javascript', 'python', 'java'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    style={{
                      background:
                        selectedLanguage === lang
                          ? 'var(--burgundy-accent)'
                          : '#ffffff',
                      border: '1px solid',
                      borderColor:
                        selectedLanguage === lang
                          ? 'var(--burgundy-accent)'
                          : 'var(--border-medium)',
                      color:
                        selectedLanguage === lang
                          ? '#ffffff'
                          : 'var(--text-secondary)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                    }}
                  >
                    {lang === 'javascript' ? 'JS' : lang}
                  </button>
                ))}
              </div>

              {/* Countdown Timer */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: '#ffffff',
                  padding: '0.3rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-medium)',
                  fontFamily: 'var(--font-code)',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  color: secondsLeft < 300 ? '#e11d48' : 'var(--burgundy-accent)',
                }}
              >
                <Clock size={14} />
                <span>{formatTimer(secondsLeft)}</span>
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  title={isTimerRunning ? 'Pause Timer' : 'Resume Timer'}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    display: 'flex',
                  }}
                >
                  {isTimerRunning ? <Pause size={12} /> : <Play size={12} />}
                </button>
                <button
                  onClick={() => setSecondsLeft(45 * 60)}
                  title="Reset Timer"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    display: 'flex',
                  }}
                >
                  <RotateCcw size={12} />
                </button>
              </div>

              {/* Generate Scorecard Button */}
              <button
                onClick={() => onOpenScorecard(simulatedStudent)}
                className="btn-accent"
                style={{
                  padding: '0.4rem 0.9rem',
                  fontSize: '0.82rem',
                }}
              >
                <Award size={15} />
                <span>Scorecard Preview</span>
              </button>
            </div>
          </div>

          {/* Main Interactive Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(300px, 360px) 1fr',
              minHeight: '620px',
            }}
            className="simulator-grid"
          >
            {/* Left Column: Video Feeds, Live Audio Waveform & Evaluation Panel */}
            <div
              style={{
                background: '#faf8f9',
                borderRight: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Dual Video Stream Simulation */}
              <div
                style={{
                  padding: '1.2rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.8rem',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                {/* Candidate Feed */}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '4/3',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-medium)',
                    backgroundColor: '#ffffff',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
                    alt="Candidate Aisha Khan"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '0.4rem 0.5rem',
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: '#ffffff',
                      }}
                    >
                      Aisha (Candidate)
                    </span>
                    <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                      <span className="waveform-bar" style={{ height: 10, background: '#ffffff' }} />
                      <span className="waveform-bar" style={{ height: 16, background: '#ffffff' }} />
                      <span className="waveform-bar" style={{ height: 8, background: '#ffffff' }} />
                    </div>
                  </div>
                </div>

                {/* Interviewer Feed */}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '4/3',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-medium)',
                    backgroundColor: '#ffffff',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80"
                    alt="Interviewer Sarah Chen"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '0.4rem 0.5rem',
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: '#ffffff',
                      }}
                    >
                      Sarah (Lead)
                    </span>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        color: '#34d399',
                        fontWeight: 700,
                      }}
                    >
                      CloudScale
                    </span>
                  </div>
                </div>
              </div>

              {/* Live Rubric Score Sliders */}
              <div
                style={{
                  padding: '1.2rem',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <h4
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'var(--burgundy-accent)',
                    }}
                  >
                    Live Corporate Rubric
                  </h4>
                  <div
                    style={{
                      background: 'var(--burgundy-soft)',
                      color: 'var(--burgundy-accent)',
                      border: '1px solid var(--burgundy-border)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-code)',
                    }}
                  >
                    {totalScore} / 100
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {/* Metric 1 */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '0.78rem',
                        marginBottom: '0.25rem',
                      }}
                    >
                      <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                        Monotonic Deque Optimization (O(N))
                      </span>
                      <span
                        style={{
                          fontWeight: 700,
                          color: 'var(--burgundy-accent)',
                          fontFamily: 'var(--font-code)',
                        }}
                      >
                        {rubricScores.algo}/25
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={25}
                      value={rubricScores.algo}
                      onChange={(e) =>
                        setRubricScores({ ...rubricScores, algo: Number(e.target.value) })
                      }
                      style={{ width: '100%', accentColor: '#881337' }}
                    />
                  </div>

                  {/* Metric 2 */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '0.78rem',
                        marginBottom: '0.25rem',
                      }}
                    >
                      <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                        Boundary & Edge-Case Vigilance
                      </span>
                      <span
                        style={{
                          fontWeight: 700,
                          color: '#059669',
                          fontFamily: 'var(--font-code)',
                        }}
                      >
                        {rubricScores.edgeCases}/20
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={20}
                      value={rubricScores.edgeCases}
                      onChange={(e) =>
                        setRubricScores({
                          ...rubricScores,
                          edgeCases: Number(e.target.value),
                        })
                      }
                      style={{ width: '100%', accentColor: '#059669' }}
                    />
                  </div>

                  {/* Metric 3 */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '0.78rem',
                        marginBottom: '0.25rem',
                      }}
                    >
                      <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                        Production Code Hygiene & Naming
                      </span>
                      <span
                        style={{
                          fontWeight: 700,
                          color: 'var(--burgundy-dark)',
                          fontFamily: 'var(--font-code)',
                        }}
                      >
                        {rubricScores.codeHygiene}/25
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={25}
                      value={rubricScores.codeHygiene}
                      onChange={(e) =>
                        setRubricScores({
                          ...rubricScores,
                          codeHygiene: Number(e.target.value),
                        })
                      }
                      style={{ width: '100%', accentColor: '#4c0519' }}
                    />
                  </div>

                  {/* Metric 4 */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '0.78rem',
                        marginBottom: '0.25rem',
                      }}
                    >
                      <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                        STAR Method & Verbal Poise
                      </span>
                      <span
                        style={{
                          fontWeight: 700,
                          color: '#b45309',
                          fontFamily: 'var(--font-code)',
                        }}
                      >
                        {rubricScores.communication}/30
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={30}
                      value={rubricScores.communication}
                      onChange={(e) =>
                        setRubricScores({
                          ...rubricScores,
                          communication: Number(e.target.value),
                        })
                      }
                      style={{ width: '100%', accentColor: '#b45309' }}
                    />
                  </div>
                </div>
              </div>

              {/* Timestamped Interviewer Notes Log */}
              <div
                style={{
                  padding: '1.2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                }}
              >
                <h4
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.8rem',
                  }}
                >
                  Timestamped Interviewer Log
                </h4>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                    maxHeight: '190px',
                    overflowY: 'auto',
                    marginBottom: '0.8rem',
                  }}
                >
                  {notes.map((n, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '0.55rem 0.75rem',
                        background: '#ffffff',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.78rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          color: 'var(--burgundy-accent)',
                          fontWeight: 700,
                          marginBottom: '0.15rem',
                          fontFamily: 'var(--font-code)',
                        }}
                      >
                        <span>{n.time}</span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: 500 }}>
                          {n.author}
                        </span>
                      </div>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                        {n.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Add Note Form */}
                <form
                  onSubmit={handleAddNote}
                  style={{ display: 'flex', gap: '0.4rem', marginTop: 'auto' }}
                >
                  <input
                    type="text"
                    placeholder="Add interviewer timestamp observation..."
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    style={{
                      flexGrow: 1,
                      background: '#ffffff',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.45rem 0.75rem',
                      fontSize: '0.78rem',
                      color: 'var(--text-primary)',
                      outline: 'none',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      background: 'var(--burgundy-accent)',
                      border: 'none',
                      borderRadius: 'var(--radius-sm)',
                      color: '#fff',
                      padding: '0.45rem 0.75rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Send size={13} />
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column: Problem Prompt & Clean Light Code Editor */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: '#ffffff',
              }}
            >
              {/* Problem Prompt Header */}
              <div
                style={{
                  padding: '1.2rem 1.6rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  background: '#fdfafb',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    marginBottom: '0.4rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.15rem 0.55rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--burgundy-soft)',
                      color: 'var(--burgundy-accent)',
                      border: '1px solid var(--burgundy-border)',
                    }}
                  >
                    {currentQuestion.category}
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.15rem 0.55rem',
                      borderRadius: 'var(--radius-full)',
                      background: '#f3f4f6',
                      color: 'var(--text-heading)',
                      border: '1px solid #e5e7eb',
                    }}
                  >
                    Target: {currentQuestion.difficulty}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--text-heading)',
                    marginBottom: '0.4rem',
                  }}
                >
                  {currentQuestion.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    whiteSpace: 'pre-line',
                    lineHeight: 1.5,
                  }}
                >
                  {currentQuestion.description}
                </p>
              </div>

              {/* Code Editor Window - Crisp Light IDE */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    padding: '0.5rem 1.6rem',
                    background: '#f8f6f7',
                    borderBottom: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-code)',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      fontWeight: 600,
                    }}
                  >
                    Solution.{selectedLanguage === 'javascript' ? 'js' : selectedLanguage === 'python' ? 'py' : 'java'}
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: '#059669',
                      fontWeight: 700,
                    }}
                  >
                    ● Auto-syncing to evaluator terminal
                  </span>
                </div>

                {/* Editable Code Box */}
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  style={{
                    flexGrow: 1,
                    width: '100%',
                    minHeight: '260px',
                    backgroundColor: '#ffffff',
                    color: '#18181b',
                    fontFamily: 'var(--font-code)',
                    fontSize: '0.85rem',
                    lineHeight: 1.6,
                    padding: '1.2rem 1.6rem',
                    border: 'none',
                    outline: 'none',
                    resize: 'none',
                  }}
                  spellCheck={false}
                />

                {/* Output Console Box */}
                {testOutput && (
                  <div
                    style={{
                      padding: '1rem 1.6rem',
                      background: '#faf8f9',
                      borderTop: '1px solid var(--border-subtle)',
                      fontFamily: 'var(--font-code)',
                      fontSize: '0.8rem',
                      color: '#065f46',
                      whiteSpace: 'pre-wrap',
                      maxHeight: '140px',
                      overflowY: 'auto',
                    }}
                  >
                    {testOutput}
                  </div>
                )}

                {/* Execution Bar */}
                <div
                  style={{
                    padding: '0.85rem 1.6rem',
                    background: '#fdfafb',
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      Time Complexity Target:{' '}
                      <strong style={{ color: 'var(--burgundy-accent)' }}>O(N)</strong>
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '0.8rem' }}>
                    <button
                      onClick={handleRunTests}
                      disabled={isRunningTests}
                      className="btn-primary"
                      style={{
                        padding: '0.55rem 1.25rem',
                        fontSize: '0.85rem',
                      }}
                    >
                      {isRunningTests ? (
                        <>
                          <span className="pulse-live" />
                          <span>Executing in Sandbox...</span>
                        </>
                      ) : (
                        <>
                          <Play size={15} fill="#fff" />
                          <span>Run Corporate Test Suite</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .simulator-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
