#!/bin/bash

echo "=========================================="
echo "DIAGNÓSTICO DE AUTOLOGIN - AulaLliure"
echo "=========================================="
echo

echo "1. ¿Existe el usuario aulalliure?"
getent passwd aulalliure && echo "✓ Usuario existe" || echo "✗ Usuario NO existe"
echo

echo "2. Grupos del usuario:"
groups aulalliure 2>/dev/null || echo "✗ No se pueden obtener grupos"
echo

echo "3. ¿Está instalado el paquete aulalliure-autologin?"
dpkg -l | grep aulalliure-autologin && echo "✓ Paquete instalado" || echo "✗ Paquete NO instalado"
echo

echo "4. Archivos de configuración de lightdm:"
echo "   - /etc/lightdm/lightdm.conf:"
if [ -f /etc/lightdm/lightdm.conf ]; then
    echo "✓ Existe"
    cat /etc/lightdm/lightdm.conf
else
    echo "✗ NO existe"
fi
echo

echo "   - /etc/lightdm/lightdm.conf.d/50-aulalliure-autologin.conf:"
if [ -f /etc/lightdm/lightdm.conf.d/50-aulalliure-autologin.conf ]; then
    echo "✓ Existe"
    cat /etc/lightdm/lightdm.conf.d/50-aulalliure-autologin.conf
else
    echo "✗ NO existe"
fi
echo

echo "5. Estado de lightdm:"
systemctl status lightdm.service --no-pager
echo

echo "6. ¿Está habilitado lightdm?"
systemctl is-enabled lightdm.service && echo "✓ Habilitado" || echo "✗ NO habilitado"
echo

echo "7. Display manager configurado:"
cat /etc/X11/default-display-manager 2>/dev/null || echo "✗ No configurado"
echo

echo "8. Sesiones X disponibles:"
ls -la /usr/share/xsessions/
echo

echo "9. Últimas líneas del log de lightdm:"
if [ -f /var/log/lightdm/lightdm.log ]; then
    tail -30 /var/log/lightdm/lightdm.log
else
    echo "✗ Log no existe"
fi
echo

echo "10. Target del sistema:"
systemctl get-default
echo

echo "=========================================="
echo "FIN DEL DIAGNÓSTICO"
echo "=========================================="
