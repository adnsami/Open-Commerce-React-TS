import Button from '../../ui/Button';
import { GlobeIcon, MenuIcon, UserIcon } from '../../ui/svgs';

const Header = () => {
    return (
        <header className="fixed flex h-14 w-full items-center justify-between bg-gray-300 px-4">
            <div className="flex">
                <Button onClick={() => {}} icon={MenuIcon} />
                <img
                    className="ml-3"
                    src="/logo.webp"
                    width={154}
                    height={44}
                    alt=""
                />
            </div>

            <div className="flex gap-3">
                <Button onClick={() => {}} icon={GlobeIcon} />
                <Button onClick={() => {}} icon={UserIcon} />
            </div>
        </header>
    );
};

export default Header;
