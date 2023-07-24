import { menuItems } from '../constant/menu-items';

export const getLinkToMenuItem: (item: number) => string | undefined = (
    item
) => {
    const result = menuItems.find(({ id }) => id === item);

    return result ? result.link : undefined;
};

export const getMenuIdByLink: (url: string) => number | undefined = (url) => {
    const result = menuItems.find(({ link }) => link === url);

    return result ? result.id : undefined;
};
