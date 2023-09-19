import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Funções dos botões
// Bom dia
export function copyToClipboardBomDia(name, business) {
    if (typeof window !== 'undefined' && 'navigator' in window) {
        navigator.clipboard.writeText(`Bom dia! aqui é o ${capitalize(name)} do suporte da ${capitalize(business)}, tudo bom?`)
            .then(() => {
                toast.success('Laudo copiado com sucesso!');
            })
            .catch((error) => {
                toast.error('Erro ao copiar', error);
            });
    }
};

// Boa tarde
export function copyToClipboardBoaTarde(name, business) {
    if (typeof window !== 'undefined' && 'navigator' in window) {
        navigator.clipboard.writeText(`Boa tarde! aqui é o ${capitalize(name)} do suporte da ${capitalize(business)}, tudo bom?`)
            .then(() => {
                toast.success('Laudo copiado com sucesso!');
            })
            .catch((error) => {
                toast.error('Erro ao copiar', error);
            });
    }
};

// Boa tarde
export function copyToClipboardBoaNoite(name, business) {
    if (typeof window !== 'undefined' && 'navigator' in window) {
        navigator.clipboard.writeText(`Boa noite! aqui é o ${capitalize(name)} do suporte da ${capitalize(business)}, tudo bom?`)
            .then(() => {
                toast.success('Laudo copiado com sucesso!');
            })
            .catch((error) => {
                toast.error('Erro ao copiar', error);
            });
    }
};

// Pergunta como pode ajudar
export function copyToClipboardComoAjudo() {
    if (typeof window !== 'undefined' && 'navigator' in window) {
        navigator.clipboard.writeText(`Como posso ajudar?`)
            .then(() => {
                toast.success('Laudo copiado com sucesso!');
            })
            .catch((error) => {
                toast.error('Erro ao copiar', error);
            });
    }
};

// Não entendi
export function copyToClipboardExplqueMelhor() {
    if (typeof window !== 'undefined' && 'navigator' in window) {
        navigator.clipboard.writeText(`Não consegui entender direito, poderia me explicar melhor? Se preferir pode mandar áudio.`)
            .then(() => {
                toast.success('Laudo copiado com sucesso!');
            })
            .catch((error) => {
                toast.error('Erro ao copiar', error);
            });
    }
};

// Encerramento
export function copyToClipboardEncerramento() {
    if (typeof window !== 'undefined' && 'navigator' in window) {
        navigator.clipboard.writeText(`Vou estar encerrando o chat aqui então, qualquer coisa estamos a disposição, tenha um ótimo dia! 😊`)
            .then(() => {
                toast.success('Laudo copiado com sucesso!');
            })
            .catch((error) => {
                toast.error('Erro ao copiar', error);
            });
    }
};

// Falta de comunicação
export function copyToClipboardFaltaDeComunicacao() {
    if (typeof window !== 'undefined' && 'navigator' in window) {
        navigator.clipboard.writeText(`Bom... Parece que teve que se ausentar, vamos estar encerrando o atendimento aqui, qualquer coisa estamos a disposição 🫡 tenha um ótimo dia! 😁`)
            .then(() => {
                toast.success('Laudo copiado com sucesso!');
            })
            .catch((error) => {
                toast.error('Erro ao copiar', error);
            });
    }
};

// Hora técnica
export function copyToClipboardHoraTecnica() {
    if (typeof window !== 'undefined' && 'navigator' in window) {
        navigator.clipboard.writeText(`A contratação do suporte em modelo avulso é feito no modelo de horas técnicas trabalhadas, a contratação mínima é de 1 hora técnica.
A cobrança da hora técnica é feita em blocos (1h e 10m deve ser cobrado em 2 horas técnicas, 2h e 30m deve cobrado em 3 horas técnicas, etc).
Nossos valores são:
1 Hora técnica : R$ 200,00
2 Horas técnicas : R$ 300,00
3 Horas técnicas : R$ 500,00
etc.
O modelo de pagamento é pré-pago, então estarei dando andamento na sua solicitação assim que me enviar o comprovante de pagamento`)
            .then(() => {
                toast.success('Laudo copiado com sucesso!');
            })
            .catch((error) => {
                toast.error('Erro ao copiar', error);
            });
    }
};

// toast.error('Esse botão ainda não foi configurado');
