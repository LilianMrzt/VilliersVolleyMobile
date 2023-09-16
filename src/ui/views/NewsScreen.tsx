// @ts-ignore
import Api from '@api/Api';
import CustomHeader from '@components/cards/CustomHeader';
import NewsCard from '@components/cards/NewsCard';
import I18n from '@utils/I18n';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

const NewsScreen = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        Api.getArticles('?sort=publishedAt:desc&populate=*').then((response) => {
            setArticles(response);
        });
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader label={I18n.t('NewsScreen')} />
            {articles?.map((article, index) => (
                <NewsCard
                    key={index}
                    article={article}
                    index={index}
                />
            ))}
        </View>
    );
};

export default NewsScreen;
