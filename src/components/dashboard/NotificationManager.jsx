import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { mockNotifications } from '../store/mockData';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Plus, Pencil, Trash2, Clock, Sparkles, Tag, Info } from 'lucide-react';

const typeIcons = { openingHours: Clock, newProduct: Sparkles, promotion: Tag, general: Info };

export default function NotificationManager() {
  const { language, t } = useLanguage();
  const [notifications, setNotifications] = useState(mockNotifications);
  const [editing, setEditing] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const emptyNotif = {
    id: Date.now(),
    title: { en: '', bg: '' },
    message: { en: '', bg: '' },
    type: 'general',
    active: true,
    date: new Date().toISOString().split('T')[0],
  };

  const handleSave = () => {
    if (editing) {
      const exists = notifications.find(n => n.id === editing.id);
      if (exists) {
        setNotifications(prev => prev.map(n => n.id === editing.id ? editing : n));
      } else {
        setNotifications(prev => [...prev, editing]);
      }
    }
    setShowDialog(false);
    setEditing(null);
  };

  const toggleActive = (id) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, active: !n.active } : n)
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-stone-900">{t('manageNotifications')}</h2>
        <Button
          onClick={() => { setEditing({ ...emptyNotif, id: Date.now() }); setShowDialog(true); }}
          className="bg-emerald-700 hover:bg-emerald-800 rounded-xl gap-2"
        >
          <Plus className="w-4 h-4" />
          {t('addNotification')}
        </Button>
      </div>

      <div className="space-y-3">
        {notifications.map(notif => {
          const Icon = typeIcons[notif.type] || Info;
          return (
            <div
              key={notif.id}
              className={`bg-white rounded-2xl border p-5 transition-all ${notif.active ? 'border-stone-100' : 'border-stone-100 opacity-60'}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="p-2 bg-stone-50 rounded-xl shrink-0">
                    <Icon className="w-4 h-4 text-stone-500" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-stone-800 truncate">{notif.title[language]}</h3>
                      <Badge variant="secondary" className={`text-[10px] shrink-0 ${notif.active ? 'bg-emerald-50 text-emerald-700' : 'bg-stone-100 text-stone-400'}`}>
                        {notif.active ? t('active') : t('inactive')}
                      </Badge>
                    </div>
                    <p className="text-xs text-stone-400 line-clamp-2">{notif.message[language]}</p>
                    <p className="text-[10px] text-stone-300 mt-1">{notif.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Switch
                    checked={notif.active}
                    onCheckedChange={() => toggleActive(notif.id)}
                  />
                  <Button
                    variant="ghost" size="icon" className="h-8 w-8 rounded-lg"
                    onClick={() => { setEditing({ ...notif }); setShowDialog(true); }}
                  >
                    <Pencil className="w-3.5 h-3.5 text-stone-400" />
                  </Button>
                  <Button
                    variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-red-50 hover:text-red-500"
                    onClick={() => setNotifications(prev => prev.filter(n => n.id !== notif.id))}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-lg rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">{t('addNotification')}</DialogTitle>
          </DialogHeader>
          {editing && (
            <div className="space-y-5 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs text-stone-500 mb-1.5 block">Title (EN)</Label>
                  <Input
                    value={editing.title.en}
                    onChange={(e) => setEditing({ ...editing, title: { ...editing.title, en: e.target.value } })}
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <Label className="text-xs text-stone-500 mb-1.5 block">Заглавие (BG)</Label>
                  <Input
                    value={editing.title.bg}
                    onChange={(e) => setEditing({ ...editing, title: { ...editing.title, bg: e.target.value } })}
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs text-stone-500 mb-1.5 block">Message (EN)</Label>
                  <Textarea
                    value={editing.message.en}
                    onChange={(e) => setEditing({ ...editing, message: { ...editing.message, en: e.target.value } })}
                    className="rounded-xl h-20"
                  />
                </div>
                <div>
                  <Label className="text-xs text-stone-500 mb-1.5 block">Съобщение (BG)</Label>
                  <Textarea
                    value={editing.message.bg}
                    onChange={(e) => setEditing({ ...editing, message: { ...editing.message, bg: e.target.value } })}
                    className="rounded-xl h-20"
                  />
                </div>
              </div>
              <div>
                <Label className="text-xs text-stone-500 mb-1.5 block">{t('type')}</Label>
                <Select value={editing.type} onValueChange={(val) => setEditing({ ...editing, type: val })}>
                  <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="openingHours">{t('openingHours')}</SelectItem>
                    <SelectItem value="newProduct">{t('newProduct')}</SelectItem>
                    <SelectItem value="promotion">{t('promotion')}</SelectItem>
                    <SelectItem value="general">{t('general')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-3 pt-2">
                <Button variant="outline" className="flex-1 rounded-xl" onClick={() => { setShowDialog(false); setEditing(null); }}>
                  {t('cancel')}
                </Button>
                <Button className="flex-1 bg-emerald-700 hover:bg-emerald-800 rounded-xl" onClick={handleSave}>
                  {t('save')}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}