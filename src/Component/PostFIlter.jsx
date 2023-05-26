import React from 'react';
import MyInput from "./UI/input/MyInput";
import Select from "./UI/Select/Select";

const PostFIlter = ({filter, setFilter}) => {
    return (

            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Поиск.."
                />
                <Select
                    defaultValue="Сортировка по"
                    options={[
                        {value: 'title', name: "По заголовку"},
                        {value: 'body', name: "По описанию"},
                    ]}
                    value={selectedSort}
                    onChange={sortPosts}
                />
            </div>

    );
};

export default PostFIlter;