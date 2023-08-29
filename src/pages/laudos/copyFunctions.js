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

// Hora técnica
export function copyToClipboardHoraTecnica() {
    if (typeof window !== 'undefined' && 'navigator' in window) {
        toast.error('Esse botão ainda não foi configurado');
        // navigator.clipboard.writeText(`Vou estar encerrando o chat aqui então, qualquer coisa estamos a disposição, tenha um ótimo dia! 😊`)
        //     .then(() => {
        //         toast.success('Laudo copiado com sucesso!');
        //     })
        //     .catch((error) => {
        //         toast.error('Erro ao copiar', error);
        //     });
    }
};