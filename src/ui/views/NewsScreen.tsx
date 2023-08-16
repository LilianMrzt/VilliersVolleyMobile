import Api from '@api/Api';
import CustomHeaderCard from '@components/cards/CustomHeaderCard';
import NewsCard from '@components/cards/NewsCard';
import { dateUtils } from '@utils/DateUtils';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

const NewsScreen = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setArticles(Api.getArticles());
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <CustomHeaderCard label={'Actualités du club'} />
            {articles.map((article, index) => (
                <NewsCard
                    key={index}
                    title={article.attributes.title}
                    publishedDate={dateUtils.formatDate(article.attributes.publishedAt)}
                    content={article.attributes.content}
                    important={article.attributes.important}
                    index={undefined}
                />
            ))}
        </View>
    );
};

export default NewsScreen;
