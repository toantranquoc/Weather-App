import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
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
