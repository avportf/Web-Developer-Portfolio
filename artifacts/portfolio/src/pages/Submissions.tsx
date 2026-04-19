import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Clock, User, RefreshCw, Inbox } from 'lucide-react';
import { useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';

interface Submission {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function Submissions() {
  const [, navigate] = useLocation();
  const { lang } = useLanguage();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSubmissions = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/contact');
      if (!res.ok) throw new Error(`Server responded ${res.status}`);
      const data = await res.json();
      setSubmissions(data);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchSubmissions(); }, []);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleString(lang, { dateStyle: 'medium', timeStyle: 'short' });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10 font-mono"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </button>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <Inbox size={28} className="text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Contact Submissions</h1>
            </div>
            <button
              onClick={fetchSubmissions}
              disabled={loading}
              className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-primary/5 disabled:opacity-40"
            >
              <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
              Refresh
            </button>
          </div>
          <p className="text-muted-foreground mb-10">
            All messages submitted through the contact form.
          </p>

          {loading && (
            <div className="flex justify-center py-20">
              <RefreshCw size={24} className="animate-spin text-primary" />
            </div>
          )}

          {error && (
            <div className="rounded-xl border border-destructive/40 bg-destructive/10 p-6 text-destructive font-mono text-sm">
              Failed to load submissions: {error}
            </div>
          )}

          {!loading && !error && submissions.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-muted-foreground gap-4">
              <Mail size={40} className="opacity-30" />
              <p className="font-mono text-sm">No submissions yet.</p>
            </div>
          )}

          {!loading && !error && submissions.length > 0 && (
            <div className="space-y-4">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">
                {submissions.length} {submissions.length === 1 ? 'message' : 'messages'}
              </p>
              {submissions.map((s, idx) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className="border border-border/50 bg-card rounded-xl p-6 space-y-4 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />

                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <User size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold leading-tight">{s.name}</p>
                        <a
                          href={`mailto:${s.email}`}
                          className="text-sm text-primary hover:underline font-mono"
                        >
                          {s.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                      <Clock size={11} />
                      {formatDate(s.createdAt)}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap border-l-2 border-primary/20 pl-4">
                    {s.message}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
