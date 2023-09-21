import Swal from "sweetalert2";
import storage from "./Storage/storage";

export const show_alert = (msg, icon) => {
    Swal.fire({title: msg, icon: icon, buttonsStyling:true });
}

export const sendRequest = async (method, params, url, redirect='', token=true) => {
    if (token) {
        const authToken = storage.get('authToken');
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + authToken;
    }
    let res;
    await axios({ method:method, url:url, data: params}).then(
         (response) => {
            res = response.data,
            (method != 'GET') ? show_alert(response.data.message, 'success'):'',
            setTimeout( () => (redirect !== '') ? window.location.href = redirect : '', 2000)           
        }).catch((errors) => {
            let desc = '';
            res = errors.response.data,
            errors.response.data.errors.map( (e) => {desc = desc + ' ' + e})
            show_alert(desc, 'error')
        })

        return res;
}

export const confirmation = (name, url, redirect='') => {
    const alert = Swal.mixin({buttonsStyling: true});
    alert.fire({
        title: 'Are you sure delete ' + name + ' ?',
        icon: 'question', showCancelButton: true, 
        confirmButtonText: '<i class="fa-solid fa-check"></i> Yes, delete',
        cancelButtonText: '<i class="fa-solid fa-ban"></i> Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            sendRequest('DELETE', {}, url, redirect);
        }
    })
}

export default show_alert;