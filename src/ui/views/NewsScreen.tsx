import Api from '@api/Api';
import CustomHeaderCard from '@components/cards/CustomHeaderCard';
import NewsCard from '@components/cards/NewsCard';
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
                    article={article}
                    index={index}
                    fromHomeScreen={false}
                />
            ))}
        </View>
    );
};

export default NewsScreen;
