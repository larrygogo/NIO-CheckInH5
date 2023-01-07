import Box from "@mui/material/Box";
import {Card, CardContent, CardHeader} from "@mui/material";
import {DataGrid, GridToolbarExport} from "@mui/x-data-grid";
import {useRequest} from "ahooks";
import axios from "axios";
import {useMemo} from "react";
import Chip from "@mui/material/Chip";


const Record = () => {
  const {data, loading} = useRequest(() => axios.get('/api/record'), {})
  const {data: rewards, loading: rewardLoading} = useRequest(() => axios.get('/api/rewardRecord'), {})

  const rows = useMemo(() => data?.data.map((item: any, index: number) => ({...item, index})) || [], [data])
  const rewardRows = useMemo(() => rewards?.data.map((item: any, index: number) => ({...item, index})) || [], [rewards])

  const rewardColumns = [
    {field: 'id', headerName: 'ID', width: 70, renderCell: (params: any) => params.row.index + 1},
    {
      field: 'name',
      headerName: '奖品名称',
      width: 200,
    },
    {
      field: 'count',
      headerName: '总量',
      width: 150,
    },
    {
      field: 'used',
      headerName: '已抽取',
      width: 150,
    },
  ]

  const userColumns = [
    // @ts-ignore
    {field: 'id', headerName: 'ID', width: 70, valueFormatter: ({ value }) => value, renderCell: (params: any) => params.row.index + 1},
    {field: 'uid', headerName: 'UID', width: 150},
    {
      field: 'name',
      headerName: '中文名',
      width: 200,
    },
    {
      field: 'eName',
      headerName: '英文名',
      width: 150,
    },
    {
      field: 'isCheck',
      headerName: '是否签退',
      // @ts-ignore
      valueFormatter: ({ value }) => value ? '是' : '否',
      renderCell: (params: any) => params.row.isCheck ? <Chip label="是" color="success"/> :
        <Chip label="否" color="error"/>,
    },
    {
      field: 'rewardName',
      headerName: '奖品',
      width: 260,
    },
  ]

  return (
    <Box sx={{padding: 10}}>

      <Card sx={{mb: 10}}>
        <CardHeader
          title="签退及获奖记录"
        />
        <CardContent>
          <Box sx={{
            height: 'calc(100vh - 180px)',
            width: '100%'
          }}>
            <DataGrid
              getRowId={(row) => row.uid}
              columns={userColumns}
              rows={rows}
              loading={loading}
              components={{
                Toolbar: () => (
                  <GridToolbarExport
                    csvOptions={{
                      fileName: "签退及获奖记录",
                      utf8WithBom: true,
                      fields: ['uid', 'name', 'eName', 'isCheck', 'rewardName']
                    }}
                  />
                ),
              }}
            />
          </Box>
        </CardContent>
      </Card>

      <Card>
        <CardHeader
          title="奖品记录"
        />
        <CardContent>
          <Box sx={{
            height: 'calc(100vh - 180px)',
            width: '100%'
          }}>
            <DataGrid
              columns={rewardColumns}
              rows={rewardRows}
              loading={rewardLoading}
              components={{
                Toolbar: () =>
                  <GridToolbarExport
                    csvOptions={{
                      fileName: "奖品记录",
                      utf8WithBom: true,
                    }}
                  />
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Record
