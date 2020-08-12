export class SupplierTask {
  static createSupplier(ajax, name, phone, phone2, description) {
    const data = {
      name,
    };

    if (phone) {
      data.phone = phone;
    }
    if (phone2) {
      data.phone2 = phone2;
    }
    if (description) {
      data.description = description;
    }

    return ajax.post("/api/warehouse/suppliers/create", data);
  }

  static getSupplier(ajax) {
    return ajax.get("/api/warehouse/suppliers");
  }

  static updateSupplier(ajax, name, update_value) {
    return ajax.put("/api/warehouse/suppliers/update", {
      name,
      update_value,
    });
  }

  static deleteSupplier(ajax, name) {
    return ajax.delete(`/api/warehouse/suppliers/delete/${encodeURIComponent(name)}`);
  }
}
