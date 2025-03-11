import { ModeToggle } from "../components/mode-toggle";

export const Header = () => {
  return (
    <div className="sticky top-0 h-20 p-4 bg-background dark:bg-background">
      <div className="flex justify-between items-center">
        <div>
          <a href="#top">
            <div className="font-extrabold text-lg">lauchydev</div>
          </a>
        </div>
        <div className="flex items-center gap-4 ">
          <a href="#projects">projects</a>
          <a href="mailto:hello@lauchy.dev">contact</a>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
