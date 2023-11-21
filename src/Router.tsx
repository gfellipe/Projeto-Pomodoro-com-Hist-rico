import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { History } from "./Pages/History";
import { DefaultLayout } from "./layouts/DefaultLayout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {" "}
        {/* O / pq queremos aplicar esse layout em todas as rotas */}
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>

      {/* Por exeplo se vc tiver uma pagina com um layout diferente vc pode fazer assim como no exemplo  abaixo, ond todas as rotas q começarem com admin vai ter o adminlayout*/}
      {/* <Route path="/admin" element={<AdmintLayout />}></Route> */}
      {/*
       * caso eu tenha uma outra rota por exemplo
       * <Route path="/products"/>
       * Ela vai acessada assim https://localhost:3000/admin/products
       * Pq vai ser a soma do path admin com o do products, pq sao rotas encadeadas pq uma rota e filha de outra rota.
       */}
    </Routes>
  );
};
