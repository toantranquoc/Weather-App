import { Input, Space } from 'antd';
import React from 'react'
const { Search } = Input;


const SearchBox = ({onSearch}) => {
    return(
        <Space direction="vertical">
          <Search placeholder="Nhập tên thành phố" onSearch={onSearch} enterButton size="large"/>
        </Space>
      );
}
export default SearchBox;
