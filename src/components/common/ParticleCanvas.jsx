import React, { useEffect, useRef } from 'react';
export const ParticleCanvas = ({ className = '' }) => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        let animationFrameId;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        const handleResize = () => {
            if (!canvas)
                return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
        const particles;
        y: number;
        vx: number;
        vy: number;
        radius: number;
        baseRadius: number;
        color: string;
        alpha: number;
    }, [] = []);
    const colors = ['#B85D38', '#D47A53', '#A54B26', '#E08A5E', '#C77D58'];
    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 55);
    for (let i = 0; i < particleCount; i++) {
        const r = Math.random() * 2.5 + 1.2;
        particles.push({
            x: Math.random() * width, y
        }) * height, vx;
        -0.5;
         * 0.4, vy;
        -0.5;
         * 0.4, radius, baseRadius,
            color;
        colors[Math.floor(Math.random() * colors.length)], alpha;
         * 0.4 + 0.2;
    }
    ;
};
let mouseX = -1000;
let mouseY = -1000;
const handleMouseMove = (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
};
const handleMouseLeave = () => {
    mouseX = -1000;
    mouseY = -1000;
};
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('mouseleave', handleMouseLeave);
const render = () => {
    ctx.clearRect(0, 0, width, height);
    // Connect neighbor particles
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 135) {
                const alpha = (1 - dist / 135) * 0.2;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(184, 93, 56, ${alpha})`;
                ctx.lineWidth = 0.85;
                ctx.stroke();
            }
        }
        // Connect with mouse cursor
        const dmx = particles[i].x - mouseX;
        const dmy = particles[i].y - mouseY;
        const mouseDist = Math.sqrt(dmx * dmx + dmy * dmy);
        if (mouseDist < 160) {
            const alpha = (1 - mouseDist / 160) * 0.45;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = `rgba(178, 83, 41, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
            // Gentle particle attraction
            particles[i].x += (mouseX - particles[i].x) * 0.012;
            particles[i].y += (mouseY - particles[i].y) * 0.012;
        }
    }
    // Draw particle nodes with soft halos
    particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width)
            p.vx *= -1;
        if (p.y < 0 || p.y > height)
            p.vy *= -1;
        // Outer glow halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * 0.25;
        ctx.fill();
        // Core solid node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
    });
    animationFrameId = requestAnimationFrame(render);
};
render();
return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseleave', handleMouseLeave);
};
[];
;
return (<canvas ref={canvasRef} className={`pointer-events-none absolute inset-0 z-0 ${className}`}/>);
;
