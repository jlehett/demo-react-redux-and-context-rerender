import localStyles from './BadContextDemo.module.scss';

function BadContextDemo() {
    return (
        <div className={localStyles.pageContent}>
            <h1>Bad Context Demo</h1>
        </div>
    );
}

export default BadContextDemo;