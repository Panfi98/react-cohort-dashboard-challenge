import Content from "./Content/Content";
import Header from "./Header/header";
import Sidebar from "./Sidebar/Sidebar";

export default function Layout() {
    return (
        <div className="title">
            <Header />
            <div className="layout">
                <Sidebar className='sidebar' />
                <Content/>
            </div>
        </div>
    )
}