import { ArticleFixtures } from '@constants/fixtures/ArticleFixtures';
import { generalInformationsFixtures } from '@constants/fixtures/GeneralInformationsFixtures';
import { dateUtils } from '@utils/DateUtils';

export default {
    getArticles() {
        return ArticleFixtures.sort((a, b) => {
            return (
                dateUtils.extractConcatenatedDates(b.attributes.publishedAt) -
                dateUtils.extractConcatenatedDates(a.attributes.publishedAt)
            );
        });
    },

    getGeneralInformations() {
        return generalInformationsFixtures.data.attributes;
    }
};
