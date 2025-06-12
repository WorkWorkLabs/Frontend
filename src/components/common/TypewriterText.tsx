import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface TypewriterTextProps {
  phrases: string[];
  className?: string;
}

const TypewriterText = ({ phrases, className = '' }: TypewriterTextProps) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (!isDeleting && currentText === currentPhrase) {
      // Pause at the end of typing
      setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(50);
      }, 2000);
      return;
    }

    if (isDeleting && currentText === '') {
      // Move to next phrase
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      setTypingSpeed(100);
      return;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(currentPhrase.slice(0, currentText.length + 1));
      } else {
        setCurrentText(currentPhrase.slice(0, currentText.length - 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed]);

  return (
    <div className={`${className} min-h-[1.5em]`}>
      {currentText}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypewriterText; 