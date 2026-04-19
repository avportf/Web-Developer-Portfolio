import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      form.reset();
      toast({ title: t.contact.successTitle, description: t.contact.successDesc });
    }, 1500);
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-mono mb-4 text-sm tracking-widest">05. {t.contact.tagline}</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{t.contact.title}</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">{t.contact.description}</p>

          <div className="bg-card border border-border/50 rounded-xl p-8 md:p-12 text-left shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs uppercase tracking-wider">{t.contact.nameLabel}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.contact.namePlaceholder} {...field} className="bg-background border-border/50 focus-visible:ring-primary" data-testid="input-contact-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs uppercase tracking-wider">{t.contact.emailLabel}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.contact.emailPlaceholder} type="email" {...field} className="bg-background border-border/50 focus-visible:ring-primary" data-testid="input-contact-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs uppercase tracking-wider">{t.contact.messageLabel}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t.contact.messagePlaceholder}
                          className="min-h-[150px] bg-background border-border/50 focus-visible:ring-primary resize-y"
                          {...field}
                          data-testid="input-contact-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full font-mono group hover-elevate"
                  disabled={isSubmitting}
                  data-testid="button-contact-submit"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">{t.contact.sending} <span className="animate-spin text-lg">⟳</span></span>
                  ) : (
                    <span className="flex items-center gap-2">{t.contact.submit} <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
