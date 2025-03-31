import confetti from 'canvas-confetti';
import { toast } from 'react-toastify';

export const handleConfettiAndToast = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
  toast.success('Thank you! Your message has been sent.');
};
