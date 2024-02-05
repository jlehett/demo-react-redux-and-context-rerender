import { useNavigate } from 'react-router-dom';
import { IconButton } from '@psionic/ui';
import {
    KeyboardArrowLeft,
    KeyboardArrowRight,
} from '@mui/icons-material';

const PAGES = [
    '/react-state-rerender-demo',
    '/bad-redux-demo',
    '/good-redux-demo',
];

function PageNavButton({ currentPage, type }) {
    const navigate = useNavigate();

    if (type === 'prev' && currentPage === PAGES[0]) {
        return null;
    }

    if (type === 'next' && currentPage === PAGES[PAGES.length - 1]) {
        return null;
    }

    function navigateToNewPage() {
        const currentIndex = PAGES.indexOf(currentPage);
        const newIndex = type === 'prev' ? currentIndex - 1 : currentIndex + 1;
        const newPage = PAGES[newIndex];

        navigate(newPage);
    }

    return (
        <IconButton
            SvgIcon={type === 'prev' ? KeyboardArrowLeft : KeyboardArrowRight}
            onClick={navigateToNewPage}
            color="white"
        />
    )
}

export default PageNavButton;
