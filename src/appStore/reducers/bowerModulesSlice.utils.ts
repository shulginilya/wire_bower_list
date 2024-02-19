import type { ISortOrder } from "./bowerModulesSlice.types";

interface IBuildSortingStringParams {
    incomingSortOrder: ISortOrder[];
};

export const buildSortingString = ({
    incomingSortOrder = []
}: IBuildSortingStringParams): string => {
    let sortString = '';
    const defaultSortOrder = [
        {
            name: 'stars',
            order: 'desc',
        }
    ];
    const actualSortOrder = [...defaultSortOrder, ...incomingSortOrder];
    const uniqueSortOrder = [...new Map(actualSortOrder.map(item => [item['name'], item])).values()];
    for (let i = 0; i < uniqueSortOrder.length; i++) {
        const sortOrderItem = uniqueSortOrder[i];
        if (sortOrderItem.order === 'desc') {
            sortString += `${sortOrderItem.name},`;
        }
    }
    return sortString.slice(0, -1);
};
