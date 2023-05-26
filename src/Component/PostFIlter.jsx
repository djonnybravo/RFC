import React from 'react';
import MyInput from "./UI/input/MyInput";
import Select from "./UI/Select/Select";

const PostFIlter = ({filter, setFilter}) => {
    return (

            <div>
                <MyInput
                    value={filter.searchQuery}
                    onChange={e => setFilter({...filter, searchQuery: e.currentTarget.value})}
                    placeholder="Поиск.."
                />
                <Select
                    defaultValue="Сортировка по"
                    options={[
                        {value: 'title', name: "По заголовку"},
                        {value: 'body', name: "По описанию"},
                    ]}
                    value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                />
            </div>

    );
};

export default PostFIlter;