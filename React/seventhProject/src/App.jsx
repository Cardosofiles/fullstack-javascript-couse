import Profile from "./components/Profile";
import avatarPerson from "./assets/jb.jpg";
import Nav from "./components/Nav";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="h-screen bg-zinc-500 text-zinc-100 ">
      <div className="h-screen flex flex-col">
        <div className="flex flex-1">
          <aside className="w-96">
            <Profile
              avatar={avatarPerson}
              name={"João Batista"}
              bio={"Full Stack JavaScript"}
              // email={"conatatojoaomiranda@outlook.com"}
              phone={"55 (34) 9 9674-1823"}
              githubUrl={"https://github.com/Cardosofiles"}
              linkedinUrl={
                "https://www.linkedin.com/in/jo%C3%A3o-batista-cardoso-miranda-2b0442268/"
              }
              instagranUrl={"https://www.instagram.com/joaobaatissta/"}
            />
          </aside>

          <main className="flex-1 flex-col p-2">
            <nav className="flex mr-3">
              <Nav />
            </nav>
            <section>
              <Main />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
