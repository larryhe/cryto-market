import range from 'lodash/range';

export const getPageCount = (total, pageSize) => (total - 1) / pageSize + 1;

export const genRange = (pageCount, currentPage, limit) => {
    if (pageCount < limit) {
        return range(1, pageCount + 1, 1);
    } else if (limit >= currentPage) {
        return range(1, limit + 1, 1);
    } else {
        return range(currentPage - limit, currentPage + 1, 1);
    }
};
