const UserValidation = (values) => {
  const errors = {};

  if (!values.nama || values.nama === "") {
    errors.nama = "Nama harus diisi";
  }

  if (!values.ipa || values.ipa === "") {
    errors.ipa = "Nilai IPA harus diisi";
  }

  if (!values.ips || values.ips === "") {
    errors.ips = "Nilai IPS harus diisi";
  }

  if (!values.mtk || values.mtk === "") {
    errors.mtk = "Nilai MTK harus diisi";
  }

  return errors;
};

export default UserValidation;
