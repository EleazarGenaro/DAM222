import React from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar
} from 'react-native';

export const margenSuperior = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export const C = {
  claro: '#cad2c5',
  verdeClaro: '#84a98c',
  verde: '#52796f',
  oscuro: '#354f52',
  negro: '#2f3e46',
  blanco: '#ffffff',
  rojo: '#8c3b3b',
};

export const T = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
    color: C.negro,
    fontSize: 13
  },
  normal: {
    color: C.negro,
    fontSize: 12
  },
  titulo: {
    fontWeight: 'bold',
    color: C.negro,
    fontSize: 15
  },
});

export function Pantalla({ children, barra }) {
  return (
    <SafeAreaView style={s.safe}>
      <View style={s.body}>
        {children}
      </View>
      {barra && <BarraInferior />}
    </SafeAreaView>
  );
}

export function BarraInferior() {
  return (
    <View style={s.barra}>
      <Text style={s.iconoBarra}>🏠</Text>
      <Text style={s.iconoBarra}>➕</Text>
    </View>
  );
}

export function EncabezadoUsuario({ titulo }) {
  return (
    <View>
      <Text style={{ fontSize: 24, color: C.negro }}>‹</Text>
      <View style={s.pill}>
        <Text style={s.pillTxt}>{titulo}</Text>
      </View>
    </View>
  );
}

export function EncabezadoAdmin({ titulo }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={[s.pill, { flex: 1, marginRight: 10, paddingVertical: 10 }]}>
        <Text style={s.pillTxt}>{titulo}</Text>
      </View>
      <Avatar size={58} />
    </View>
  );
}

export function Avatar({ size = 48 }) {
  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: C.negro,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text style={{ fontSize: size * 0.5 }}>👤</Text>
    </View>
  );
}

export function Panel({ children, style }) {
  return <View style={[s.panel, style]}>{children}</View>;
}

export function Tarjeta({ children, style }) {
  return <View style={[s.tarjeta, style]}>{children}</View>;
}

export function Chip({ texto, style }) {
  return (
    <View style={[s.chip, style]}>
      <Text style={s.chipTxt}>{texto}</Text>
    </View>
  );
}

export function Boton({ texto, tipo, style }) {
  let fondo = C.claro;
  let color = C.negro;
  let borde = C.negro;

  if (tipo === 'aceptar') {
    fondo = C.verde;
    color = C.blanco;
    borde = C.verde;
  }

  if (tipo === 'rechazar') {
    fondo = C.rojo;
    color = C.blanco;
    borde = C.rojo;
  }

  if (tipo === 'oscuro') {
    fondo = C.oscuro;
    color = C.claro;
    borde = C.oscuro;
  }

  return (
    <Pressable style={[s.boton, { backgroundColor: fondo, borderColor: borde }, style]}>
      <Text style={{ color: color, fontWeight: 'bold', fontSize: 13 }}>
        {texto}
      </Text>
    </Pressable>
  );
}

export function Campo({ etiqueta, multilinea }) {
  return (
    <View style={{ marginBottom: 14 }}>
      <Text style={[T.bold, { marginBottom: 6 }]}>{etiqueta}</Text>
      <TextInput
        style={[
          s.input,
          multilinea && {
            height: 110,
            borderRadius: 16,
            textAlignVertical: 'top',
            paddingTop: 10
          }
        ]}
        multiline={multilinea}
      />
    </View>
  );
}

export function Buscador({ titulo, subtitulo }) {
  return (
    <Tarjeta>
      <Text style={T.bold}>{titulo}</Text>

      {subtitulo ? (
        <Text style={[T.normal, { marginBottom: 6 }]}>
          {subtitulo}
        </Text>
      ) : null}

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
        <TextInput style={[s.input, { flex: 1, height: 36, paddingVertical: 0 }]} />
        <Boton
          texto="Buscar"
          style={{ marginLeft: 8, paddingVertical: 7, paddingHorizontal: 12 }}
        />
      </View>
    </Tarjeta>
  );
}

export function Linea({ icono, texto }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
      <Text style={{ fontSize: 12 }}>{icono}</Text>
      <Text style={[T.bold, { marginLeft: 6 }]}>{texto}</Text>
    </View>
  );
}

export function ImagenPH({ ancho = 90, alto = 24, style }) {
  return (
    <View style={[
      {
        width: ancho,
        height: alto,
        backgroundColor: C.negro,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 6
      },
      style
    ]}>
      <Text style={{ fontSize: 12 }}>🖼️</Text>
    </View>
  );
}

export function Estrellas() {
  return (
    <Text style={{ fontSize: 22, color: C.negro, letterSpacing: 4 }}>
      ☆☆☆☆☆
    </Text>
  );
}

export function Reloj() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
      <Text style={{ fontSize: 14 }}>🕒</Text>
      <View style={{
        flex: 1,
        height: 16,
        backgroundColor: C.oscuro,
        borderRadius: 8,
        marginLeft: 6
      }} />
    </View>
  );
}

export function FilaEditar({ etiqueta, children }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
      <View style={{ flex: 1 }}>
        {children || (
          <View style={s.etiqueta}>
            <Text style={T.normal}>{etiqueta}</Text>
          </View>
        )}
      </View>

      <Pressable style={s.editar}>
        <Text style={{ color: C.claro, fontSize: 11, fontWeight: 'bold' }}>
          Editar
        </Text>
      </Pressable>
    </View>
  );
}

export function Tabs({ activo = 0 }) {
  const opciones = ['Cursos Impartidos', 'Solicitudes'];

  return (
    <View style={s.tabs}>
      {opciones.map((o, i) => (
        <View
          key={o}
          style={[
            s.tab,
            i === activo && {
              borderBottomWidth: 2,
              borderBottomColor: C.negro
            }
          ]}
        >
          <Text style={[T.normal, i === activo && { fontWeight: 'bold' }]}>
            {o}
          </Text>
        </View>
      ))}
    </View>
  );
}

export function GraficaHoras() {
  const datos = [
    { p: 65, c: C.oscuro, n: '65% Programación' },
    { p: 20, c: C.verde, n: '20% Finanzas' },
    { p: 15, c: C.claro, n: '15% Electrónica' },
  ];

  return (
    <View>
      <View style={{
        flexDirection: 'row',
        height: 22,
        borderRadius: 11,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: C.negro
      }}>
        {datos.map((d) => (
          <View
            key={d.n}
            style={{ flex: d.p, backgroundColor: d.c }}
          />
        ))}
      </View>

      <View style={{ marginTop: 8 }}>
        {datos.map((d) => (
          <View
            key={d.n}
            style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2 }}
          >
            <View style={{
              width: 10,
              height: 10,
              backgroundColor: d.c,
              borderWidth: 1,
              borderColor: C.negro,
              marginRight: 6
            }} />
            <Text style={{ fontSize: 10, color: C.negro }}>{d.n}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export function GraficaCreditos() {
  const alturas = [30, 55, 40, 65, 45, 70, 35];

  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'flex-end',
      height: 80,
      borderLeftWidth: 1.5,
      borderBottomWidth: 1.5,
      borderColor: C.negro,
      paddingHorizontal: 6
    }}>
      {alturas.map((h, i) => (
        <View
          key={i}
          style={{
            flex: 1,
            height: h,
            backgroundColor: C.oscuro,
            marginHorizontal: 3,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4
          }}
        />
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: C.claro,
    paddingTop: margenSuperior
  },
  body: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 10
  },
  barra: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: C.negro,
    height: 58,
    borderRadius: 20,
    marginHorizontal: 14,
    marginVertical: 10
  },
  iconoBarra: {
    fontSize: 24
  },
  pill: {
    borderWidth: 1.5,
    borderColor: C.negro,
    borderRadius: 22,
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: C.claro
  },
  pillTxt: {
    fontWeight: 'bold',
    fontSize: 16,
    color: C.negro,
    textAlign: 'center'
  },
  panel: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: C.negro,
    borderRadius: 22,
    padding: 14,
    marginTop: 10,
    backgroundColor: C.claro
  },
  tarjeta: {
    backgroundColor: C.verdeClaro,
    borderRadius: 14,
    padding: 12,
    marginBottom: 12
  },
  chip: {
    alignSelf: 'flex-start',
    backgroundColor: C.oscuro,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 3
  },
  chipTxt: {
    color: C.claro,
    fontSize: 11,
    fontWeight: 'bold'
  },
  boton: {
    borderWidth: 1.5,
    borderRadius: 18,
    paddingVertical: 8,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    backgroundColor: '#e3e8df',
    borderWidth: 1.5,
    borderColor: C.negro,
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 40,
    color: C.negro
  },
  etiqueta: {
    backgroundColor: C.claro,
    borderRadius: 14,
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  editar: {
    backgroundColor: C.oscuro,
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 8
  },
  tabs: {
    flexDirection: 'row',
    borderWidth: 1.5,
    borderColor: C.negro,
    borderRadius: 8,
    backgroundColor: C.verdeClaro
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8
  },
});