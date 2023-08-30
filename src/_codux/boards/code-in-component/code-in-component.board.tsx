import { createBoard } from '@wixc3/react-board';
import { CodeInComponent } from '../../../components/code-in-component/code-in-component';

export default createBoard({
    name: 'CodeInComponent',
    Board: () => <CodeInComponent />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1496,
    },
});
