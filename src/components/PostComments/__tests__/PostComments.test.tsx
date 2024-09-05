import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {

    test('Deve fazer dois comentarios no post', () => {
        render(<PostComment />);

        // recupera a textbox
        const commentTextarea = screen.getByRole("textbox")

        // recupera o botao
        const btnComentar = screen.getByRole('button')

        // escreve na textbox
        fireEvent.change(commentTextarea, {
            target: {
                value: 'Muito maneira essa miniatura!'
            },
        })

        // verifica se o comentario foi digitado na textbox
        expect(commentTextarea).toHaveValue('Muito maneira essa miniatura!')

        // aciona o botao
        fireEvent.click(btnComentar)

        // verifica se o comentario foi enviado
        expect(screen.getByText('Muito maneira essa miniatura!')).toBeInTheDocument()

        // ---------------------------------------------------- //

        // escreve na textbox
        fireEvent.change(commentTextarea, {
            target: {
                value: 'Onde eu consigo uma dessas?'
            },
        })

        // verifica se o comentario foi digitado na textbox
        expect(commentTextarea).toHaveValue('Onde eu consigo uma dessas?')

        // aciona o botao
        fireEvent.click(btnComentar)

        // verifica se o comentario foi enviado
        expect(screen.getByText('Onde eu consigo uma dessas?')).toBeInTheDocument()

        
        // verifica se existe 2 comentarios enviados
        expect(screen.getAllByTestId("post-comment")).toHaveLength(2)
    })
});