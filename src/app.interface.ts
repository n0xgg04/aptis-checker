export interface Root {
    status: boolean
    message: string
    data: Data
}

export interface Data {
    thong_tin_ca_nhan: ThongTinCaNhan
    thong_tin_lan_thi: any[]
}

export interface ThongTinCaNhan {
    ho_ten: string
    ngay_sinh: string
    gioi_tinh: string
    thanh_pho_hoc_tap: string
    phone: string
    email: string
    ten_truong_dang_hoc: string
    cccd: string
    id_chung_chi: string
}
