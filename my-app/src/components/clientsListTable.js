import React, { useState } from 'react';
import { Table, Avatar } from 'antd';
import { fetchClientsList } from '../services';
import { useService } from '../hooks';

const columns = [
    {
        title: "客户名称",
        key: "name",
        dataIndex: "name",
        render: (name, row) => (
            <React.Fragment>
                <Avatar src={row.img} />
                &nbsp;&nbsp;
                {name}
            </React.Fragment>
        )
    },
    {
        title: "客户账号",
        key: "number",
        dataIndex: "number"
    },
    {
        title: "资产",
        key: "asset",
        dataIndex: "asset",
        render: asset => `¥ ${parseFloat(asset).toFixed(2)}`
    },
    {
        title: "创建时间",
        key: "createTime",
        dataIndex: "createTime"
    },
    {
        title: "更新时间",
        key: "updateTime",
        dataIndex: "updateTime"
    }
];

const ClientListTable = () => {
    const [pageSize, setPageSize] = useState(5);
    const [pageNo, setPageNo] = useState(1);
    const { loading = false, response = {} } = useService(fetchClientsList, {
        pageSize,
        pageNo
    });
    const { list = [], total } = response || {};

    return (
        <div>
            <Table
                loading={loading}
                dataSource={list}
                columns={columns}
                bordered
                pagination={{
                    pageSize,
                    current: pageNo,
                    total,
                    onChange: (pageNo, pageSize) => {
                        setPageNo(pageNo);
                        setPageSize(pageSize);
                    }
                }}
            />
        </div>
    )
};

export default ClientListTable;
