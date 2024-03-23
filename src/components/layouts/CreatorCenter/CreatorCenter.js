import { Header, Sidebar } from './';

function CreatorCenter({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                {children}
            </div>
        </div>
    );
}

export default CreatorCenter;
