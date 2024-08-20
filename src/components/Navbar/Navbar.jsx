import { useDispatch, useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Languages, Menu, Package2, Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { logoutUser } from "../../store/slice";

const lngs = {
  en: { nativeName: "English" },
  uz: { nativeName: "Uzbek" },
};

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [count, setCounter] = useState(0);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser(user?._id));
  };

  const OnNavigate = (path) => {
    navigate(path);
  };
  const SingUp = (path) => {
    navigate(path);
  };

  return (
    <div>
      <header className="sticky container top-0 flex h-20 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden w-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            to="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("navbar.home")}
          </Link>
          <Link
            to="/about"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("navbar.about")}
          </Link>
          <Link
            to="/products"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("navbar.products")}
          </Link>
          <Link
            to="/orders"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("navbar.orders")}
          </Link>
          <Link
            to="/settings"
            className="text-foreground transition-colors hover:text-foreground"
          >
            {t("navbar.settings")}
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                to="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                to="/"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("navbar.home")}
              </Link>
              <Link
                to="/about"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("navbar.about")}
              </Link>
              <Link
                to="/products"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("navbar.products")}
              </Link>
              <Link
                to="/orders"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("navbar.orders")}
              </Link>
              <Link
                to="/settings"
                className="text-foreground transition-colors hover:text-foreground"
              >
                {t("navbar.settings")}
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="p-2">
                <Languages className="w-8 h-8" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuSeparator />
              {Object.keys(lngs).map((lng) => (
                <DropdownMenuItem
                  key={lng}
                  onClick={() => {
                    i18n.changeLanguage(lng);
                    setCounter(count + 1);
                  }}
                >
                  <span
                    className={`fi fi-${lng === "en" ? "gb" : "uz"}`}
                  ></span>{" "}
                  {lngs[lng].nativeName}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {user?.email ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <img
                    src={user?.image}
                    alt="User"
                    className="w-full h-full rounded-full"
                  />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
                <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => OnNavigate("/profile")}>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="outline" onClick={() => SingUp("/login")}>
              Sign Up
            </Button>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
