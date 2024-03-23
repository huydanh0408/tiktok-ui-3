import { Header, Sidebar } from './';

function DefaultLayout({ children }) {
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

export default DefaultLayout;
